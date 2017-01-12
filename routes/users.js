var express = require('express');
var router = express.Router();
var connection=require('./db');
var xss = require('xss');
/* 获取新闻列表*/
router.get('/getnews', function(req, res, next) {
  connection.query(
  	'SELECT * FROM `news`',
  	function(err,rows){
  		res.json(rows);
  	}
  	);
});

/*获取要修改的news*/
router.get('/curnews',function(req,res){
	var newsid=req.query.newsid;
	connection.query(
		'SELECT * FROM `news` WHERE id=?',
		[newsid],
		function(err,rows,fileds){
			res.json(rows);
		}
	);
});
/*删除新闻*/
router.post('/delnews',function(req,res){
	var newsid=req.body.newsid;
	connection.query(
		'DELETE FROM `news` WHERE `id`=?',
		[newsid],
		function(err,result){
			console.log(result.affectedRows);
			res.json(result);
		}
	);
});


/*修改新闻*/
router.post('/update',function(req,res){
	var newsid=req.body.newsid;
	var newstitle=req.body.newstitle;
	var newstype=req.body.newstype;
	var newsimg=req.body.newsimg;
	var newstime=req.body.newstime;
	var newssrc=req.body.newssrc;

	connection.query(
		'UPDATE `news` SET `newstype`=?,`newstitle`=?,`newsimg`=?,`newstime`=?,`newssrc`=? WHERE `id`=?',
		[xss(newstype),xss(newstitle),xss(newsimg),xss(newstime),xss(newssrc),newsid],
		function(err,rows){
			console.log("rows-------------"+rows);
			res.json(rows.changedRows);
		}
	);
	
});

/*添加新闻*/
router.post('/insert',function(req,res){
     var newstitle=req.body.newstitle;
     var newstype=req.body.newstype;
     var newsimg=req.body.newsimg;
     var newstime=req.body.newstime;
     var newssrc=req.body.newssrc;

     connection.query(
     	'INSERT INTO `news` (`newstype`,`newstitle`,`newsimg`,`newstime`,`newssrc`)  VALUES (?,?,?,?,?)',
     	[xss(newstype),xss(newstitle),xss(newsimg),xss(newstime),xss(newssrc)],
     	function(err,result){
     		if(!err){
					console.log(result.insertId);
					res.json(result)
				}
     	}
     );
});
module.exports = router;
