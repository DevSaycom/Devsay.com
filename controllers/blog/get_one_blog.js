const Blog = require('../../models/blog')

exports.single_post = (req, res, next) => {
  Blog.findOne({slug: req.params.slug}, (err, blog) => {
    if (err) {
      throw err
    } else {
      if (blog < 1) {
        res.render('404', {
          title: 'no existe wn 1'
        })
      } else {
        res.render('blog/post', {
          blog: blog
        })
      }
    }
  })
}