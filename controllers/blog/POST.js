const mongoose = require('mongoose')
const Blog = require('../../models/blog')
const slugify = require('../../libs/slugify')

exports.blog_post = (req, res, next) => {
  let blog = new Blog()
  console.log(req.body)


  blog._id = mongoose.Types.ObjectId()
  blog.title = req.body.title
  blog.slug = slugify(blog.title)
  blog.body = req.body.body

  blog.save((err) => {
    if (err) {
      console.error(err)
    } else {
      res.redirect('/admin')
    }
  })
}