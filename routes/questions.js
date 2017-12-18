var express = require('express');
var router = express.Router();

/*
 * GET a search page - Has reflective-DOM XSS exploit (in the form of question asked) as query, and can be used in same
 * way to use url parts that won't be sent to the server
 */
router.get('/', function(req, res, next) {
    res.render('questions');//, {params: {question: req.query.question, asker: req.query.asker}});
});

module.exports = router;