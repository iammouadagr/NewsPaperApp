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

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.disable('etag');

//db connection;
db.connect((err) => {
    if(err)  console.error('error connecting: ' + err.stack);
    else console.log("MySql db connected ")

});

//Routes
app.get('/',(req, res) => {

    //Loading from API
    businessApi.load();
    sportsApi.load();
    entertainmentApi.load();
    healthApi.load();

    res.send("hello world");
});

app.get('/business',(req,res)=> {

    businessApi.load();

    let query ='SELECT * FROM article WHERE category LIKE "business" ';
    db.query(query,(err,result) =>{
        if(err) {
            console.error('Error fetching data: ' + err.stack);
        }else {
            console.log("Data fetched ");
            res.json(result);
            
        }
    });
});

app.get('/sports',(req,res)=> {

    sportsApi.load();

    let query ='SELECT * FROM article WHERE category LIKE "sports" ';
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