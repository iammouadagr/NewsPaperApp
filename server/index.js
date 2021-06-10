const express = require('express');
const favicon = require('serve-favicon');
const path = require('path');
const app = express();
const PORT = 3001;
const db = require('./db/dbConnection');

// API
const businessApi = require("./models/businessCategory");
const sportsApi = require('./models/sportsCategory');
const entertainmentApi = require('./models/entertainmentCategory');
const healthApi = require('./models/healthCategory');
const allCategoriesApi = require('./models/allCategories')


//Pagination
const Pagination = require('./utilities/Pagination');

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.disable('etag');

//db connection;
db.connect((err) => {
    if(err)  console.error('error connecting: ' + err.stack);
    else console.log("MySql db connected ")

});

//Routes
app.get('/breakingNews',(req, res) => {

    //Loading from API
    businessApi.load();
    sportsApi.load();
    entertainmentApi.load();
    healthApi.load();

    
    let query ='SELECT * FROM nabaatv.article order by publishedAt DESC';
    db.query(query,(err,result) =>{
        if(err) {
            console.error('Error fetching data: ' + err.stack);
        }else {
            console.log("Data fetched ");
            res.json(result);
            
        }
    });
});

app.get('/business',(req,res)=> {

    //pagination 
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);
    
    // loading API
    businessApi.load("publishedAt");

    let query ='SELECT * FROM article WHERE category LIKE "business" ORDER BY publishedAt DESC ';
    db.query(query,(err,result) =>{
        if(err) {
            console.error('Error fetching data: ' + err.stack);
        }else {
            console.log("Data fetched ");
            const paginatedResults = Pagination.pagination(page,limit,result);
            res.json(paginatedResults);
            
        }
    });
});

app.get('/sports',(req,res)=> {

    // loading api
    sportsApi.load("publishedAt");

    //pagination 
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);

    let query ='SELECT * FROM article WHERE category LIKE "sports" ORDER BY publishedAt DESC';
    db.query(query,(err,result) =>{
        if(err) {
            console.error('Error fetching data: ' + err.stack);
        }else {
            console.log("Data fetched ");
            const paginatedResults = Pagination.pagination(page,limit,result);
            res.json(paginatedResults);
            
        }
    });
});

app.get('/entertainment',(req,res)=> {

    // loading api
    entertainmentApi.load("publishedAt");

    //pagination
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);

    let query ='SELECT * FROM article WHERE category LIKE "entertainment" ORDER BY publishedAt DESC ';
    db.query(query,(err,result) =>{
        if(err) {
            console.error('Error fetching data: ' + err.stack);
        }else {
            console.log("Data fetched ");
            const paginatedResults = Pagination.pagination(page,limit,result);
            res.json(paginatedResults);
            
        }
    });
});

app.get('/health',(req,res)=> {

    //loading api
    healthApi.load("publishedAt");

    //pagination
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);

    let query ='SELECT * FROM article WHERE category LIKE "health" ORDER BY publishedAt DESC';
    db.query(query,(err,result) =>{
        if(err) {
            console.error('Error fetching data: ' + err.stack);
        }else {
            console.log("Data fetched ");
            const paginatedResults = Pagination.pagination(page,limit,result);
            res.json(paginatedResults);
            
        }
    });
});

app.get('/topbreakingnews',(req,res)=> {

    //Loading from API
    businessApi.load();
    sportsApi.load();
    entertainmentApi.load();
    healthApi.load();

    let query ='SELECT * FROM nabaatv.article order by publishedAt DESC limit 1 ';
    db.query(query,(err,result) =>{
        if(err) {
            console.error('Error fetching data: ' + err.stack);
        }else {
            console.log("Data fetched ");
            res.json(result);
            
        }
    });

});

app.get('/topbusiness',(req,res)=> {

    //Loading from API
    businessApi.load("publishedAt");
    

    let query ='SELECT * FROM nabaatv.article WHERE category LIKE "business" order by publishedAt DESC limit 1 ';
    db.query(query,(err,result) =>{
        if(err) {
            console.error('Error fetching data: ' + err.stack);
        }else {
            console.log("Data fetched ");
            res.json(result);
            
        }
    });

});

app.get('/topsports',(req,res)=> {

    //Loading from API
    
    sportsApi.load("publishedAt");
    

    let query ='SELECT * FROM nabaatv.article WHERE category LIKE "sports" order by publishedAt DESC limit 1 ';
    db.query(query,(err,result) =>{
        if(err) {
            console.error('Error fetching data: ' + err.stack);
        }else {
            console.log("Data fetched ");
            res.json(result);
            
        }
    });

});

app.get('/topentertainment',(req,res)=> {

    //Loading from API
    entertainmentApi.load("publishedAt");


    let query ='SELECT * FROM nabaatv.article WHERE category LIKE "entertainment" order by publishedAt DESC limit 1 ';
    db.query(query,(err,result) =>{
        if(err) {
            console.error('Error fetching data: ' + err.stack);
        }else {
            console.log("Data fetched ");
            res.json(result);
            
        }
    });

});

app.get('/tophealth',(req,res)=> {

    //Loading from API
    healthApi.load("publishedAt");

    let query ='SELECT * FROM nabaatv.article WHERE category LIKE "health" order by publishedAt DESC limit 1 ';
    db.query(query,(err,result) =>{
        if(err) {
            console.error('Error fetching data: ' + err.stack);
        }else {
            console.log("Data fetched ");
            res.json(result);
            
        }
    });

});

app.get('/allcategories',(req,res)=> {

    //Loading from API
    allCategoriesApi.load();

    let query ='SELECT * FROM nabaatv.article WHERE category LIKE "none" order by publishedAt DESC  ';
    db.query(query,(err,result) =>{
        if(err) {
            console.error('Error fetching data: ' + err.stack);
        }else {
            console.log("Data fetched ");
            res.json(result);
            
        }
    });

});

app.get('/topallcategories',(req,res)=> {

    //Loading from API
    allCategoriesApi.load();

    let query ='SELECT * FROM nabaatv.article WHERE category LIKE "none" order by publishedAt DESC limit 1 ';
    db.query(query,(err,result) =>{
        if(err) {
            console.error('Error fetching data: ' + err.stack);
        }else {
            console.log("Data fetched ");
            res.json(result);
            
        }
    });

});

app.get('/healthMostPopular',(req,res)=> {

    //Loading from API
    healthApi.load("popularity");

    let query ='SELECT * FROM nabaatv.article WHERE category LIKE "health" order by id DESC limit 4 ';
    db.query(query,(err,result) =>{
        if(err) {
            console.error('Error fetching data: ' + err.stack);
        }else {
            console.log("Data fetched ");
            res.json(result);
            
        }
    });

});

app.get('/sportsMostPopular',(req,res)=> {

    //Loading from API
    sportsApi.load("popularity");

    let query ='SELECT * FROM nabaatv.article WHERE category LIKE "sports" order by publishedAt DESC limit 4 ';
    db.query(query,(err,result) =>{
        if(err) {
            console.error('Error fetching data: ' + err.stack);
        }else {
            console.log("Data fetched ");
            res.json(result);
            
        }
    });

});

app.get('/businessMostPopular',(req,res)=> {

    //Loading from API
    businessApi.load("popularity");

    let query ='SELECT * FROM nabaatv.article WHERE category LIKE "business" order by publishedAt DESC limit 4 ';
    db.query(query,(err,result) =>{
        if(err) {
            console.error('Error fetching data: ' + err.stack);
        }else {
            console.log("Data fetched ");
            res.json(result);
            
        }
    });

});

app.get('/entertainmentMostPopular',(req,res)=> {

    //Loading from API
    entertainmentApi.load("popularity");

    let query ='SELECT * FROM nabaatv.article WHERE category LIKE "entertainment" order by publishedAt DESC limit 4 ';
    db.query(query,(err,result) =>{
        if(err) {
            console.error('Error fetching data: ' + err.stack);
        }else {
            console.log("Data fetched ");
            res.json(result);
            
        }
    });

});

app.get('/breakingNews-:id',(req,res)=> {
    
    let query ='SELECT * FROM nabaatv.article WHERE id ='+req.params.id;
    db.query(query,(err,result) =>{
        if(err) {
            console.error('Error fetching data: ' + err.stack);
        }else {
            console.log("Data fetched ");
            res.json(result);
            
        }
    });

});

app.get('/health/:id',(req,res)=> {
    
    let query ='SELECT * FROM nabaatv.article WHERE category LIKE "health" AND id ='+req.params.id;
    db.query(query,(err,result) =>{
        if(err) {
            console.error('Error fetching data: ' + err.stack);
        }else {
            console.log("Data fetched ");
            res.json(result);
            
        }
    });

});

app.get('/sports/:id',(req,res)=> {
    
    let query ='SELECT * FROM nabaatv.article WHERE category LIKE "sports" AND id ='+req.params.id;
    db.query(query,(err,result) =>{
        if(err) {
            console.error('Error fetching data: ' + err.stack);
        }else {
            console.log("Data fetched ");
            res.json(result);
            
        }
    });

});

app.get('/entertainment/:id',(req,res)=> {
    
    let query ='SELECT * FROM nabaatv.article WHERE category LIKE "entertainment" AND id ='+req.params.id;
    db.query(query,(err,result) =>{
        if(err) {
            console.error('Error fetching data: ' + err.stack);
        }else {
            console.log("Data fetched ");
            res.json(result);
            
        }
    });

});

app.get('/business/:id',(req,res)=> {
    
    let query ='SELECT * FROM nabaatv.article WHERE category LIKE "business" AND id ='+req.params.id;
    db.query(query,(err,result) =>{
        if(err) {
            console.error('Error fetching data: ' + err.stack);
        }else {
            console.log("Data fetched ");
            res.json(result);
            
        }
    });

});

app.get('/allcategories/:id',(req,res)=> {
    
    let query ='SELECT * FROM nabaatv.article WHERE category LIKE "none" AND id ='+req.params.id;
    db.query(query,(err,result) =>{
        if(err) {
            console.error('Error fetching data: ' + err.stack);
        }else {
            console.log("Data fetched ");
            res.json(result);
            
        }
    });

});



//Port
app.listen(PORT,() => {
    console.log("running on port",PORT );
})