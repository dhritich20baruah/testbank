const bcrypt = require("bcryptjs")
const User = require('../models/Users')
const passport = require("passport")
const LocalStrategy = require("passport-local").Strategy

passport.serializeUser((user, done)=>{
    done(null, user.id)
})

passport.deserializeUser((id, done) =>{
    User.findById(id, (err, user)=>{
        done(err, user)
    })
})

//Local Strategy
passport.use(
    new LocalStrategy({ usernameField: "email"}, (email, password, done)=>{
        User.findOne({ email: email }).then(user => {
            
        })
    })
)