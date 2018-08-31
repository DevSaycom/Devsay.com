const express = require('express')
const path = require('path')
const favicon = require('serve-favicon')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const passport = require('passport')
const session = require('express-session')

require('dotenv').config()

const index = require('./routes/index')
const users = require('./routes/users')
const blog  = require('./routes/blog')
const about = require('./routes/about')
const admin = require('./routes/admin')

const app = express()

mongoose.connect('mongodb://127.0.0.1/devsay_landing', { useNewUrlParser: true })

console.log(process.env.SESSION_SECRET)
// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser('process.env.SESSION_SECRET'))
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: true,
  saveUninitialized: true
}))

app.use(express.static(path.join(__dirname, 'public')))

require('./config/passport')(passport)
//passport middleware
app.use(passport.initialize())
app.use(passport.session())

app.get('*', (req, res, next) => {
  res.locals.user = req.user || null
  next()
})

app.use('/', index)
app.use('/users', users)
app.use('/blog', blog)
app.use('/about', about)
app.use('/admin', admin)

/* app.get('*', (req, res, next) => {
  console.log('no existe')
  res.render('404', {
    title: 'Esta wea no existe ql'
  })
}) */

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error('Not Found')
  err.status = 404
  next(err)
})

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
