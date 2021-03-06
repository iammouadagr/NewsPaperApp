const Article = require('./article');
const db = require('../db/dbConnection')
const fetch = require('node-fetch');
const category = "business";
const apiKey = "e310ae04b4b244a5892a2ed4b35766a7";





const load = (sortBy) => {
   
    fetch("https://newsapi.org/v2/top-headlines?country=ma&category="+category+"&apiKey="+apiKey+"&sortBy="+sortBy)
        .then(res => res.json())
        .then(data => {
            
            data.articles.forEach(element => {

                if(element.urlToImage == null){
                    element.urlToImage = 'https://nabaatv.com/wp-content/uploads/2021/01/NABAA-TV-LOGO1.png'
                }
                
                let newArticle = new Article(element.source.name,
                    element.author,
                    element.title,
                    element.description,
                    element.url,
                    element.urlToImage,
                    element.publishedAt,
                    element.content,
                    category);
                

                let query = 'INSERT INTO article(source,author,title,description,url,urlToImage,publishedAt,content,category) VALUES (?,?,?,?,?,?,?,?,?)';
                let values = [newArticle.source,
                    newArticle.author,
                    newArticle.title,
                    newArticle.description,
                    newArticle.url,
                    newArticle.urlToImage,
                    newArticle.publishedAt,
                    newArticle.content,
                    newArticle.category];
                
                
                db.query(query,values,(err,result) =>{
                    if(err) {
                        console.error('Error Inserting Item: ' + err.stack);
                    }else {
                        console.log("Item Inserted ");
                        
                    }
                });
                
            })
           
        })
};

module.exports.load = load;