/**
 * Created by vhe on 7/24/2017.
 */
const express = require('express');
const router = express.Router();
const feedCtrl = require('./controller/feed.controller.js');
const blogCtrl = require('./controller/blog.controller');

router.get('/feed',feedCtrl.getFeed);

router.post('/blog',blogCtrl.postBlog);
router.get('/blog', blogCtrl.getBlogs);
router.get('/blogsize', blogCtrl.getBlogSize);
router.get('/blog/popular', blogCtrl.getPopularBlogs);
// router.put('/blog/:blogId', blogCtrl.updateBlog);
// router.delete('/blog/delete/:blogId', blogCtrl.deleteBlogs);

router.post('/blog/comment/:blogId',blogCtrl.addComment);
router.get('/blog/comment/:blogId', blogCtrl.getComments);
router.get('/blog/:blogId',blogCtrl.getBlogById );



/* GET api listing. */
router.get('/', (req, res) => {
  console.log(res);
});

module.exports = router;
