const express = require('express');
const app = express();
const port = 8010;
const path = require('path')
const mongoose = require('mongoose');
const ejs = require('ejs');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');

//Local DataBase
mongoose.connect('mongodb://localhost/portfolio', {
    useNewUrlParser: true, useUnifiedTopology: true,
});

app.use(express.urlencoded({ extended: true }));
// app.use('/static', express.static('static'));//For serving static files
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use('/static', express.static('static'));//For serving static files

//Bodyparser
app.use(express.urlencoded({extended: flash}));

//Express Session
app.use(session({
    secret: 'secret',
    resave: true,
    saveUnitialized: true,
}))

//passport middleware
app.use(passport.initialize());
app.use(passport.session())

//Connect flash
app.use(flash());


//Routes
app.get("/", (req, res) => {
    res.render("index");
});
app.use('/admin', require('./routes/admin'))

app.get("/home", (req, res) => {
    res.render("index");
});

const jeemains = require('./routes/jeemain')
const jeeadv = require('./routes/jeeadv')
const ibpsrrb = require('./routes/ibpsrrb')

app.use('/jeemains', jeemains)
app.use('/jeeadv', jeeadv)
app.use('/ibpsrrb', ibpsrrb)



app.listen(port, () =>{
    console.log(`Server started at port ${port}`)
})


