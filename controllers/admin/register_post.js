const mongoose = require('mongoose')
const Admin = require('../../models/admin')
const bcrypt = require('bcrypt')

exports.register_post = (req, res, next) => {
  const name = req.body.name
  const username = req.body.username
  const email = req.body.email
  const password = req.body.password

  let admin = new Admin({
    name: name,
    username: username,
    email: email,
    password: password
  })

  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(admin.password, salt, (err, hash) => {
      if (err) {
        console.error(err)
      } else {
        admin.password = hash
        admin.save((err) => {
          if (err) {
            console.error(err)
          } else {
            res.redirect('/admin/')
          }
        })
      }
    })
  })

}