const express = require('express');
const app = express();
const port = 8010;
const path = require('path')
const mongoose = require('mongoose');
const ejs = require('ejs');
const passport = require('passport')
const flash = require('express-flash')
const session = require('express-session')
const bodyParser = require('body-parser')

// Passport Config
require('./config/passport')(passport);

//Local DataBase
mongoose.connect('mongodb://localhost/portfolio', {
    useNewUrlParser: true, useUnifiedTopology: true,
});

const Job = require('./models/Job')

//Bodyparser middleware, extended false does not allow nested payloads
app.use(bodyParser.json())
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

//For serving static files
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use('/static', express.static('static'));

//Express session
app.use(
    session({
        secret: "TOP SECRET",
        resave: true,
        saveUninitialized: true,
    })
)

//Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Connect flash
app.use(flash());

// Global variables
app.use(function(req, res, next) {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  next();
});

//Routes
app.get("/", (req, res) => {
    Job.find({}, function(err, job){
        if(err){
            console.log(err);
        }else{
            res.render('index', {job: job})
        }
    }).sort({createdAt: 'desc'})
});


const jeemains = require('./routes/jeemain')
const jeeadv = require('./routes/jeeadv')
const ibpsrrb = require('./routes/ibpsrrb')
var auth = require('./routes/auth')
var newjob = require('./routes/newjob')

app.use('/jeemains', jeemains)
app.use('/jeeadv', jeeadv)
app.use('/ibpsrrb', ibpsrrb)
app.use('/auth', auth)
app.use('/job', newjob)

app.listen(port, () =>{
    console.log(`Server started at port ${port}`)
})


