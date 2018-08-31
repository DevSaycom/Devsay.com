const mongoose = require('mongoose')
const Admin = require('../../models/admin')
const bcrypt = require('bcrypt')
const passport = require('passport')

exports.login_post = (req, res, next) => {
  passport.authenticate('local', {
    successRedirect: '/admin',
    failureRedirect: '/admin/login'
  })(req, res, next)
}

