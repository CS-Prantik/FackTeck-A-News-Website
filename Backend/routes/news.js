const express = require('express')
const axios = require('axios')
const newsr=express.Router()
const moment = require('moment')
const math = require('math')


newsr.get('/',async(req,res)=>{
    try {
      console.log("api working started");
      // https://newsdata.io/api/1/news?apikey=pub_24116cd7ca0a107af9dfb87d2519355b514e5&q=pegasus&language=en
      // https://newsdata.io/api/1/archive?apikey=pub_24116cd7ca0a107af9dfb87d2519355b514e5&q=metaverse
      // https://newsdata.io/api/1/news?apikey=pub_24116cd7ca0a107af9dfb87d2519355b514e5&q=technology&country=in&language=en&category=technology 
      // https://newsdata.io/api/1/news?apikey=pub_24116cd7ca0a107af9dfb87d2519355b514e5&q=ancient&country=in&category=politics 
      var top1_url = "http://newsapi.org/v2/top-headlines?country=in&apiKey=89aeec7315fc418c8d84c2246035737c";
      var top2_url = "http://newsapi.org/v2/top-headlines?sources=the-times-of-india&apiKey=89aeec7315fc418c8d84c2246035737c";
      var top3_url = "http://newsapi.org/v2/top-headlines?sources=google-news&apiKey=89aeec7315fc418c8d84c2246035737c";
      var evr_url = "http://newsapi.org/v2/everything?sources=bbc-news&apiKey=89aeec7315fc418c8d84c2246035737c";

      const top1_news_get = await axios.get(top1_url);
      const top2_news_get = await axios.get(top2_url);
      const top3_news_get = await axios.get(top3_url);
      const evr_news_get = await axios.get(evr_url);
      console.log("api working done");
      res.render('news', {
        top1_articles: top1_news_get.data.articles,
        top2_articles: top2_news_get.data.articles,
        top3_articles: top3_news_get.data.articles,
        evr_articles: evr_news_get.data.articles
      });
      console.log(top3_news_get.data.articles[0])
      console.log("render done");
    } catch (error) {
        if(error.response){
            console.log(error)
        }
        
    }
})
newsr.get('/news1',async(req,res)=>{
  try {
    var top1_url = "http://newsapi.org/v2/top-headlines?country=in&apiKey=89aeec7315fc418c8d84c2246035737c";
    const top1_news_get = await axios.get(top1_url);
    console.log("news1 api working done");
    res.render('news1', {
      top1_articles: top1_news_get.data.articles,
    });
  } catch (error) {
      if(error.response){
          console.log(error)
      }
      
  }
})
newsr.get('/news2',async(req,res)=>{
  try {
    var top2_url = "http://newsapi.org/v2/top-headlines?sources=the-times-of-india&apiKey=89aeec7315fc418c8d84c2246035737c";
    const top2_news_get = await axios.get(top2_url);
    res.render('news2', {
      top2_articles: top2_news_get.data.articles,
    });
  } catch (error) {
      if(error.response){
          console.log(error)
      }
      
  }
})
newsr.get('/news3',async(req,res)=>{
  try {
    var evr_url = "http://newsapi.org/v2/everything?sources=bbc-news&apiKey=89aeec7315fc418c8d84c2246035737c";
    const evr_news_get = await axios.get(evr_url);
    res.render('news3', {
      evr_articles: evr_news_get.data.articles
    });
  } catch (error) {
      if(error.response){
          console.log(error)
      }
      
  }
})

// newsr.post('/search',async(req,res)=>{
//     const search=req.body.search
//     // console.log(req.body.search)

//     try {
//         var url = `http://newsapi.org/v2/everything?q=${search}&apiKey=89aeec7315fc418c8d84c2246035737c`;

//         const news_get =await axios.get(url)
//         res.render('news',{articles:news_get.data.articles})
        
        

        
        
//     } catch (error) {
//         if(error.response){
//             console.log(error)
//         }
        
//     }
// })
newsr.get


module.exports=newsr