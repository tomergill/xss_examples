var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('questions', {question: req.query.question});
});

module.exports = router;