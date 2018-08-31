const express = require('express')
const router = express.Router()

/* const multer = require('multer')
const checkAuth = require() */

const getAll = require('../controllers/blog/get_all_blogs')
const getOne = require('../controllers/blog/get_one_blog')


router.get('/', getAll.get_all)
router.get('/:slug', getOne.single_post)


module.exports = router