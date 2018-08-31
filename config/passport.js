const LocalStrategy = require('passport-local').Strategy
const Admin = require('../models/admin')
const bcrypt = require('bcrypt')

module.exports = function(passport){
  //TODO añadir email en login strategy. Remover username.
  // Local Strategy
  passport.use(new LocalStrategy(function(username, password, done){
    // Match Username
    let query = {username:username}
    Admin.findOne(query, function(err, user){
      if(err) throw err
      if(!user){
        return done(null, false, {message: 'No user found'})
      }

      // Match Password
      bcrypt.compare(password, user.password, function(err, isMatch){
        if(err) throw err
        if(isMatch){
          return done(null, user)
        } else {
          return done(null, false, {message: 'Wrong password'})
        }
      })
    })
  }))

  passport.serializeUser(function(user, done) {
    done(null, user.id)
  })
  passport.deserializeUser(function(id, done) {
    Admin.findById(id, function(err, user) {
      done(err, user)
    })
  })
}