const mongoose = require('mongoose')
const Admin = require('../../models/admin')

exports.register_get = (req, res, next) => {
  //TODO: si ya hay admin, res.render /login/
  Admin.find({}, (err, admin) => {
    if (admin.length <= 0) {
      res.render('admin/register', {
        title: 'Admin Register!'
      })
    } else {
      res.redirect('/admin/login')
    }
  })
}