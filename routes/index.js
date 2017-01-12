var express = require('express');
var router = express.Router();
var connection=require('./db');
/* GET home page. */
router.get('/', function(req, res, next) {
 var newstype=req.query.newstype;

  // connection.connect();
  connection.query(
  		'SELECT * FROM `news` WHERE `newstype`=?',
  		[newstype],
  		function(err, rows, fields){
  			// if (err) throw err;
  			res.json(rows);
  		}
  	);

	// connection.end();
});

module.exports = router;
