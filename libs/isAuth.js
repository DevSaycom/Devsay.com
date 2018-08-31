const passport = require('passport')

function isAuth(req, res, next) {
  if (req.isAuthenticated()) {
    console.log('logueado!')
    return next()
  } else {
    res.redirect('/admin/login')
  }
}

module.exports = isAuth