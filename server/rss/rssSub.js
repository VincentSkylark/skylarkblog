/**
 * Created by vhe on 7/27/2017.
 */
/**
 * Creat Mongo server
 **/

const MongoClient = require('mongodb');
const assert = require('assert');

const FeedSub = require('feedsub');
const util = require('util');

const reader = new FeedSub('https://newsfeed.eveonline.com/en-US/44/articles/page/1/20', {
  interval: 10, // check feed every 10 minutes
  maxHistory: 3,
  emitOnStart: true
});

module.exports.rssSub = function(){
  MongoClient.connect('mongodb://alpha:qwe123@localhost:27017/rssdb', (err, db)=>{
    if(err){throw err}
    reader.on('item', function(item){
      db.collection('rss').save(item, ()=>{
        db.close();
      });
    });
  });

  reader.start();
};

