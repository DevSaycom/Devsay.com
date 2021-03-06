const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const isAuth = require('../libs/isAuth')

const registerGetController = require('../controllers/admin/register_get')
const registerPostController = require('../controllers/admin/register_post')
const loginGetController = require('../controllers/admin/login_get')
const loginPostController = require('../controllers/admin/login_post')
const indexGetController = require('../controllers/admin/admin')

const  postNewBlogController = require('../controllers/blog/post_new_blog')
const POST_newBlogController = require('../controllers/blog/POST')

router.get('/register', registerGetController.register_get)
router.get('/login', loginGetController.login_get)
router.get('/', isAuth, indexGetController.get_admin)
router.get('/new', isAuth, postNewBlogController.add_blog)

router.post('/register', registerPostController.register_post)
router.post('/login', loginPostController.login_post)
router.post('/new', isAuth, POST_newBlogController.blog_post)

module.exports = router