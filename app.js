const express = require('express');
const app = express();
const port = 8010;
const path = require('path')

app.use(express.urlencoded({ extended: true }));
// app.use('/static', express.static('static'));//For serving static files
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/static', express.static('static'));//For serving static files

app.get("/", (req, res) => {
    res.render("index");
  });
  app.get("/home", (req, res) => {
    res.render("index");
  });
app.get('/hello', (req, res)=>{
    res.render("hello")
})
app.get('/jeemain2021s1', (req, res)=>{
    res.render("jeemain2021s1")
})
app.get('/jeemain2021s2', (req, res)=>{
    res.render("jeemain2021s2")
})
app.get('/jeemain2021shift1questions', (req, res)=>{
    res.render("jeemain2021shift1questions")
})
app.get('/jeemain2021shift2questions', (req, res)=>{
    res.render("jeemain2021shift2questions")
})
app.get('/jeeadv2021paper1', (req, res)=>{
    res.render("jeeadv2021paper1")
})
app.get('/jeeadv2021paper1questions', (req, res)=>{
    res.render("jeeadv2021paper1questions")
})
app.listen(port, () =>{
    console.log(`Server started at port ${port}`)
})