var mysql = require("mysql")
var con = mysql.createConnection({
    database : 'administrator',
    user: 'root',
    port:  3306,
    password: '',
    host: 'localhost'
});
con.connect(function(error){
    if(error)
        console.log(error);
    else 
        console.log("connected with mysql database ");
});
module.exports.con = con;