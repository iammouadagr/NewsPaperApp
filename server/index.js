const express = require('express');
const favicon = require('serve-favicon');
const path = require('path')
const app = express();
const PORT = 3001;
const businessApi = require("./models/businessCategory");

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.disable('etag');

app.get('/',(req, res) => {
    businessApi.load();
    res.send("hello world");
});

app.listen(PORT,() => {
    console.log("running on port",PORT );
})