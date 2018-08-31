const mongoose = require('mongoose')
const Blog = require('../../models/blog')

exports.get_all = (req, res, next) => {
  Blog.find({}, (err, posts) => {
    if (err) {
      throw err
    } else {
      let inverted = posts.reverse()

      res.render('blog/blog', {
        posts: posts,
        title: 'Hola poh ql'
      })
    }
  })
}