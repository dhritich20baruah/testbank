const express = require('express');
const app = express();
const port = 8010;
const path = require('path')
const mongoose = require('mongoose');
const ejs = require('ejs');

//Local DataBase
mongoose.connect('mongodb://localhost/portfolio', {
    useNewUrlParser: true, useUnifiedTopology: true,
});

app.use(express.urlencoded({ extended: false }));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use('/static', express.static('static'));//For serving static files

//Routes
app.get("/", (req, res) => {
    res.render("index");
});

app.get("/home", (req, res) => {
    res.render("index");
});

const jeemains = require('./routes/jeemain')
const jeeadv = require('./routes/jeeadv')
const ibpsrrb = require('./routes/ibpsrrb')
var authRouter = require('./routes/auth')

app.use('/jeemains', jeemains)
app.use('/jeeadv', jeeadv)
app.use('/ibpsrrb', ibpsrrb)
app.use('/auth', authRouter)

app.listen(port, () =>{
    console.log(`Server started at port ${port}`)
})


