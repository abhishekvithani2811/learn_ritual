var connection = require("./connection") //our own library
var InsertCourse = function (request, response) {

    var title = request.body.title;
    var detail = request.body.detail;
    var duration = request.body.duration;
    var noofhours = request.body.noofhours;
    var price = request.body.price;
    var iscertified = request.body.iscertified;
    var status = request.body.status;

    var sql = `insert into course (title,detail,duration,noofhours,price,iscertified,status) values('${title}','${detail}',${duration},${noofhours},${price},${iscertified},${status})`;
    console.log(sql);
    connection.con.query(sql, function (error, result) {
        if (error) {
            console.log(error);
            response.json({ 'error': 'error occured' });
        }
        else {
            response.json({ 'message': 'Register successfully' });
        }
    });
}
module.exports.InsertCourse = InsertCourse
