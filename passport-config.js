const localStrategy = require('passport-local').Strategy
const bcrypt = require('bcryptjs')

function initialize(passport, getAdminByName, getAdminById){
    const authenticateAdmin = async (name, password, done) => {
        const admin = getAdminByName(name)
        if (admin == null) {
            return done (null, false, {message: 'no user with that name'})
        }
        try{
            if (await bcrypt.compare(password, user.password))
            {
                return done (null, user)
            }else{
                return done (null, false, {message: 'Password incorrect'})
            }
        }   catch(e){
            return done(e)
        }
    }

    passport.use(new localStrategy({ adminnameField: 'name' }, authenticateAdmin))
    passport.serializeUser((admin, done) => done(null, admin.id))
    passport.deserializeUser((id, done) => {
        return done(null, getAdminById(id))
    })
}

module.exports = initialize