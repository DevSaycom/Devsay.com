const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
/* const multer = require('multer')
const checkAuth = require() */

const getAll = require('../controllers/blog/get_all_blogs')
const getOne = require('../controllers/blog/get_one_blog')
const postOne = require('../controllers/blog/POST')
const getNewPost = require('../controllers/blog/post_new_blog')

router.get('/', getAll.get_all)
router.get('/post/:slug', getOne.single_post)
router.get('/new', getNewPost.add_blog)

router.post('/new', postOne.blog_post)

module.exports = router