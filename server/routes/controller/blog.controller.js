/**
 * Created by vhe on 7/31/2017.
 */
'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const env = require('../../environment.js');

mongoose.connect(env.mongodbUrl, { useMongoClient: true });

// Schema for blog post
let postSchema = new Schema({
    title: { type: String, require: true },
    author: { type: String, default: 'Vincent He' },
    tag: [{ type: String }],
    views: { type: Number, default: 0 },
    created_date: { type: Date, default: Date.now },
    isActive: { type: Boolean, default: true },
    imageUrl: String,
    brief: String,
    content: String,
    comments: [{ type: Schema.ObjectId, ref: 'blogComments' }]

});

// Schema for comment
let commentSchema = new Schema({
    name: { type: String, default: 'visitor' },
    content: { type: String },
    created_date: { type: Date, default: Date.now }
});

// Model using post schema
let blogPost = mongoose.model('blogPost', postSchema);
let comments = mongoose.model('blogComments', commentSchema);

/**
 * Blog CRUD APIs
 */
module.exports.postBlog = function (req, res) {
    console.log("post blog");
    // req.body = {
    //   title: String,
    //   author: String,
    //   tag: Array,
    //   imageUrl: String,
    //   brief: String
    //   content: String
    // };

    let newBlog = new blogPost({
        title: req.body.title,
        author: req.body.author,
        tag: req.body.tag,
        imageUrl: req.body.imageUrl,
        brief: req.body.brief,
        content: req.body.content
    });

    newBlog.save((err, post) => {
        if (err) {
            res.status(500).send(err);
        }
        res.status(201).send(post);
    });

};

module.exports.updateBlog = function (req, res) {
    console.log("edit blog");
    // req.param = {blogId: Number};
    // req.body = {
    //   title: String,
    //   tag: Array,
    //   imageUrl: String
    //   brief: String,
    //   contents: String
    // };

    let updateBlog = {
        isActive: true
    };
    if (req.body.title) {
        updateBlog.title = req.body.title
    }
    if (req.body.tag) {
        updateBlog.$set = { tag: req.body.tag }
    }
    if (req.body.imageUrl) {
        updateBlog.imageUrl = req.body.imageUrl
    }
    if (req.body.brief) {
        updateBlog.brief = req.body.brief
    }
    if (req.body.contents) {
        updateBlog.content = req.body.contents
    }

    let option = { new: true };
    blogPost.findByIdAndUpdate(req.params.blogId, updateBlog, option, (err, doc) => {
        if (err) {
            res.status(500).send(err);
        }
        res.json(doc);
    });
};

module.exports.deleteBlogs = function (req, res) {
    console.log("deactivate blog post");
    // req.param = {blogId: Number};

    blogPost.findByIdAndUpdate(req.params.blogId, { isActive: false }, (err) => {
        if (err) {
            res.status(500).send(err);
        }
        res.status(200);
    });
};
/**
 * Public CRUD APIs
 */
module.exports.addComment = function (req, res) {
    console.log("add comment");
    // req.params = {blogId: String};
    // req.body = {
    //   name: String,
    //   content: String.
    // };

    let comment = new comments({
        name: req.body.name,
        content: req.body.content
    });

    let addComment = {
        $push: {
            comments: comment._id
        }
    };

    let option = { new: true };
    if (req.body.name && req.body.name !== 'guest') {
        comment.save((err) => {
            if (err) {
                res.status(500).send(err);
            }

            blogPost.findByIdAndUpdate(req.params.blogId, addComment, option, (err, doc) => {
                if (err) {
                    res.status(500).send(err);
                } else {
                    res.status(200).send({ message: 'success' });
                }
            });
        });
    } else {
        res.status(401).send('Please Login to leave a comment');
    }


};

module.exports.getComments = function (req, res) {
    console.log("get comments");
    //req.params = { blogId: String };

    blogPost.find({ _id: req.params.blogId }, { comments: 1 })
        .limit(1)
        .populate({ path: 'comments', options: { sort: { 'created_date': -1 }, limit: 10 } })
        .exec((err, doc) => {
            if (err) {
                res.status(500).send(err);
            } else {
                res.send(doc);
            }
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
            res.status(500).send(err);
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

    const pageSize = (req.query.pageSize <= 30 && req.query.pageSize >= 1) ? ~~req.query.pageSize : 10;
    const pageNumber = (req.query.pageNumber >= 1) ? ~~req.query.pageNumber : 1;

    blogPost.find({ isActive: true }, {content: 0})
        .sort({ created_date: -1 })
        .skip((pageNumber - 1) * pageSize)
        .limit(pageSize)
        .exec((err, doc) => {
            if (err) {
                res.status(500).send(err);
            } else {
                res.json(doc);
            }

        });

};

module.exports.getBlogSize = function (req, res) {
    console.log("get blog size");
    let query = req.body;
    blogPost.count(query, (err, doc) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(doc); // node handles number differently
        }
    });
};

module.exports.getPopularBlogs = function (req, res) {
    console.log("get popular blogs");
    // req.query = {
    //   pageSize: Number,
    // };

    const pageSize = (req.query.pageSize <= 30 && req.query.pageSize >= 1) ? ~~req.query.pageSize : 5;

    blogPost.find({ isActive: true }, { content: 0, imageUrl: 0, brief: 0 })
        .sort({ views: -1 })
        .limit(pageSize)
        .exec((err, doc) => {
            if (err) {
                res.status(500).send(err);
            } else {
                res.json(doc);
            }
        }
        );

};

module.exports.getPastBlogs = function (req, res) {
    console.log("get past blogs");
    //req.query = {
    //    pageSize: Number,
    //    startDate: Date,
    //    endDate: Date
    //}

    const pageSize = (req.query.pageSize <= 30 && req.query.pageSize >= 1) ? ~~req.query.pageSize : 15;

    const query = {
        isActive: true,
        created_date: {
            $gte: req.query.startDate,
            $lt: req.query.endDate
        }
    };

    blogPost.find(query, { content: 0 })
        .sort({ created_date: -1 })
        .limit(pageSize)
        .exec((err, doc) => {
            if (err) {
                res.status(500).send(err);
            } else {
                res.json(doc);
            }
        });

};
