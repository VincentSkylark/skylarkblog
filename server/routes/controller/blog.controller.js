/**
 * Created by vhe on 7/31/2017.
 */
'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost:27017/blogPosts', {useMongoClient: true});

// Schema for blog post
let postSchema = new Schema({
  title: {type: String, require: true},
  author: {type: String, default: 'Vincent He'},
  tag: [{type: String}],
  views: {type: Number, default: 0},
  created_date: {type: Date, default: Date.now},
  isActive: {type: Boolean, default: true},
  content: String,
  comments: [
    {
      author: {type: String, default: 'visitor'},
      content: String
    }
  ]
});

// Model using post schema
let blogPost = mongoose.model('blogPost', postSchema);

/**
 * ALPHA CRUD APIs
 */
module.exports.postBlog = function (req, res) {
  console.log("post blog");
  // req.body = {
  //   title: String,
  //   author: String,
  //   tag: Array,
  //   content: String
  // };

  let newBlog = new blogPost({
    title: req.body.title,
    author: req.body.author,
    tag: req.body.tag,
    content: req.body.content
  });

  newBlog.save((err, post) => {
    if (err) {
      res.send(err);
    }
    res.send(201, post);
  });

};

module.exports.updateBlog = function (req, res) {
  console.log("edit blog");
  // req.param = {blogId: Number};
  // req.body = {
  //   title: String,
  //   tag: Array,
  //   contents: String
  // };

  let updateBlog = {
    isActive: true
  };
  if (req.body.title) {
    updateBlog.title = req.body.title
  }
  if (req.body.contents) {
    updateBlog.content = req.body.contents
  }
  if (req.body.tag) {
    updateBlog.$set = {tag: req.body.tag}
  }
  let option = {new: true};
  blogPost.findByIdAndUpdate(req.params.blogId, updateBlog, option, (err, doc) => {
    if (err) {
      res.send(err);
    }
    res.json(doc);
  });
};

module.exports.deleteBlogs = function (req, res) {
  console.log("deactivate blog post");
  // req.param = {blogId: Number};

  blogPost.findByIdAndUpdate(req.params.blogId, {isActive: false}, (err) => {
    if (err) {
      res.send(err);
    }
    res.send(200);
  });
};
/**
 * Public CRUD APIs
 */
module.exports.addComment = function (req, res) {
  console.log("add comment");
  // req.params = {blogId: Number};
  // req.body = {
  //   author: String,
  //   comment: String.
  // };

  let addComment = {
    $push: {
      comments: {
        author: req.body.author,
        content: req.body.comment
      }
    }
  };
  let option = {new: true};
  blogPost.findByIdAndUpdate(req.params.blogId, addComment, option, (err, doc) => {
    if (err) {
      res.send(err);
    }
    res.json(doc);
  });

};

module.exports.getBlogById = function (req, res) {
  console.log("querying post");
  // req.params = {blogId: Number};

  let increaseView = {
    $inc: {
      views: 1
    }
  };
  blogPost.findByIdAndUpdate(req.params.blogId, increaseView, (err, doc) => {
    if (err) {
      res.send(err);
    }
    res.json(doc);
  })

};

module.exports.getBlogs = function (req, res) {
  console.log("get blog list");
  // req.query = {
  //   pageSize: Number,
  //   pageNumber: Number,
  // };

  const pageSize = (req.query.pageSize <= 30 && req.query.pageSize >= 1) ? ~~req.query.pageSize : 15;
  const pageNumber = (req.query.pageNumber >= 1) ? ~~req.query.pageNumber : 1;

  blogPost.find({isActive: true})
    .skip((pageNumber - 1) * pageSize)
    .limit(pageSize)
    .sort({})
    .exec((err, doc) => {
      if (err) {
        res.send(err);
      }else if(req.isAuthenticated()){
        res.json(doc);
      }else {
        res.sendStatus(401);
      }

    });

};

