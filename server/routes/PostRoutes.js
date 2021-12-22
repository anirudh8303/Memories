const express = require('express');
const postController =  require('./../controllers/PostController')

const router =  express.Router();
router.route('/').get(postController.getAllPosts);
router.route('/').post(postController.addPost);

module.exports = router;