const express = require('express');
const favicon = require('serve-favicon');
const path = require('path');
const app = express();
const PORT = 3001;
const businessApi = require("./models/businessCategory");
const db = require('./db/dbConnection');
const sportsApi = require('./models/sportsCategory')

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
    
    res.send("hello world");
});

//Port
app.listen(PORT,() => {
    console.log("running on port",PORT );
})