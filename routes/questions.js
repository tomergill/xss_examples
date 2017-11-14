var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('questions');//, {params: {question: req.query.question, asker: req.query.asker}});
});

module.exports = router;