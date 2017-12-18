var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page - Has persistent XSS exploit, in the form of a message list of plain HTML */
router.get('/', function (req, res, next) {
    var msgList = JSON.parse(fs.readFileSync('./resources/messages.json', 'utf-8'));
    console.log(req.query.newMessage);
    if (req.query.newMessage) {
        msgList.push(req.query.newMessage);
        fs.writeFileSync('./resources/messages.json',JSON.stringify(msgList));
    }
    res.render('index', {data: {msgList: msgList}});
});

module.exports = router;

