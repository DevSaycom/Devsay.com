const mongoose = require('mongoose')
const Blog = require('../../models/blog')
const slugify = require('../../libs/slugify')

exports.add_blog = (req, res, next) => {
  res.render('blog/new_post')
}