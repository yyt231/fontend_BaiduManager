/**
 * Created by Tony on 2016/12/2.
 */
var mysql  = require('mysql');
var connection = mysql.createPool({
    host:'localhost',
    port:3306,
    user:'root',
    password:'',
    database:'baidunews'
});
module.exports=connection;