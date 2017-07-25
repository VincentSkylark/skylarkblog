//feed sub repo: https://github.com/fent/node-feedsub
const FeedSub = require('feedsub');
const path = require('path');
const fs = require('fs');
const util = require('util');

const stream = fs.createWriteStream(path.join(__dirname, 'RSS.txt'));

const reader = new FeedSub('https://newsfeed.eveonline.com/en-US/44/articles/page/1/20', {
	interval: 10, // check feed every 10 minutes
	maxHistory: 10,
	emitOnStart: true,
	requestOpts: {}
});

reader.on('item', function (item) {
	stream.write(JSON.stringify(item));
});

reader.start();