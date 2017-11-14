var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function (req, res, next) {
    var msgList = JSON.parse(fs.readFileSync('./resources/messages.json', 'utf-8'));
    console.log(req.query.newMessage);
    if (req.query.newMessage) {
        msgList.push(req.query.newMessage);
        fs.writeFileSync('./resources/messages.json',JSON.stringify(msgList));
    }
    res.render('index', {data: {msgList: msgList}});
    //console.log(res);
});


router.post('/', function (req, res, next) {
    res.render('index', {title: 'bulbul'});
});

module.exports = router;

