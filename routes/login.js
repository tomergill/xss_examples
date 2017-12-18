var express = require('express');
var router = express.Router();

/*
 * GET login page - Has reflective XSS exploit: The next link to go after login is in the query, can change to
 * activate javascript code using javascript: as url header
*/
router.get('/', function(req, res, next) {
    res.render('login', {nextLink: req.query.nextlink});
});

module.exports = router;