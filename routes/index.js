var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', {
      title: 'Index',
      partials: {
          header: 'header',
          footer: 'footer'
      }
  });
});

module.exports = router;
