var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'questions'});
});


router.post('/', function (req, res, next) {
    res.render('index', {title: 'bulbul'});
});

module.exports = router;

