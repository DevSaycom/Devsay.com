const mongoose = require('mongoose')

exports.get_admin = (req, res, next) => {
  res.render('admin/index', {
    title: 'Admin Page!'
  })
}