const mongoose = require('mongoose')
const Blog = require('../../models/blog')
const slugify = require('../../libs/slugify')

const multer = require('multer')
const path = require('path')



const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, 'public/uploads')
  },
  filename: function(req, file, cb){
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
  }
})

const upload = multer({
  storage: storage
}).single('imagen')

exports.blog_post = (req, res, next) => {
  upload(req, res, (err) => {
    if (err) {
      throw err
    } else {
      console.log(req.file)
      let imgn = req.file
      console.log(imgn.filename)
      let blog = new Blog()

    blog._id = mongoose.Types.ObjectId()
    blog.title = req.body.title
    blog.slug = slugify(blog.title)
    blog.body = req.body.body
    blog.image = imgn.filename

    blog.save((err) => {
    if (err) {
      console.error(err)
    } else {
      res.redirect('/admin')
    }
  })
    }
  })


/*   const imagenes = req.files */

/*   let blog = new Blog()

  blog._id = mongoose.Types.ObjectId()
  blog.title = req.body.title
  blog.slug = slugify(blog.title)
  blog.body = req.body.body */
/*   blog.image = imagenes[0].path */

  /* blog.save((err) => {
    if (err) {
      console.error(err)
    } else {
      res.redirect('/admin')
    }
  }) */
}