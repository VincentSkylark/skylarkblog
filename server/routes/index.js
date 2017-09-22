/**
 * Created by vhe on 7/24/2017.
 */
const express = require('express');
const router = express.Router();
const authCtrl = require('./controller/auth.controller.js');
const blogCtrl = require('./controller/blog.controller');

router.post('/auth/valid', authCtrl.validToken);

router.post('/blog',blogCtrl.postBlog); // test api
router.get('/blog', blogCtrl.getBlogs);
router.get('/blogsize', blogCtrl.getBlogSize);
router.get('/blog/popular', blogCtrl.getPopularBlogs);
router.delete('/blog/delete/:blogId', blogCtrl.deleteBlogs); // test api

router.post('/blog/comment/:blogId',blogCtrl.addComment);
router.get('/blog/comment/:blogId', blogCtrl.getComments);
router.get('/blog/:blogId', blogCtrl.getBlogById);
router.put('/blog/:blogId', blogCtrl.updateBlog); // test api



/* GET api listing. */
router.get('/', (req, res) => {
  console.log(res);
});

module.exports = router;
