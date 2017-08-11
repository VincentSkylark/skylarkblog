/**
 * Created by vhe on 7/27/2017.
 */
'use strict';
//Mongodb
const MongoClient = require('mongodb').MongoClient;
const http = require('http');

module.exports.getFeed = function(req, res){
  MongoClient.connect('mongodb://alpha:qwe123@localhost:27017/rssdb', (err, db)=>{
    if(err){throw err}
    db.collection('rss').find().sort({$natural:1}).limit(10).toArray((err, result)=>{
      if(err){throw err;}
      db.close();
      res.send(result);
    });
  });
};

