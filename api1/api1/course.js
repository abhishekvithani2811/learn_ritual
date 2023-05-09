var connection = require("./connection") //our own library
var InsertCourse = function (request, response) {

    var religionid = request.body.religionid;
    var title = request.body.title;
    var detail = request.body.detail;
    var duration = request.body.duration;
    var noofhours = request.body.noofhours;
    var price = request.body.price;
    var iscertified = request.body.iscertified;
    var status = request.body.status;

    var sql = `insert into course (religionid,title,detail,duration,noofhours,price,iscertified,status) values(${religionid},'${title}','${detail}',${duration},${noofhours},${price},${iscertified},${status})`;
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
var FetchCourse = function (request, response) {
    var sql = "select * from course order by id desc";
    connection.con.query(sql, function (error, result) {
        if (error) {
            console.log(error);
            response.json({ 'error': 'error occured' });
        }
        else {
            //convert fetched data from table into json format 
            var output_as_json = JSON.parse(JSON.stringify(result));
            response.send(output_as_json);
        }
    });
}
var FetchReligioncourse = function (request, response) {
    var religionid=request.params.religionid ;
    console.log(religionid);
    var sql =` select a.id,a.religionid,a.title,a.detail,a.duration,a.noofhours,a.price,a.iscertified,a.status from course a,religion b where a.id=b.id AND religionid = '${religionid}'`;
    connection.con.query(sql, function (error, result) {
        if (error) {
            console.log(error);
            response.json({ 'error': 'error occured' });
        }
        else {
            //convert fetched data from table into json format 
            var output_as_json = JSON.parse(JSON.stringify(result));
            
            response.send(output_as_json);
        }
    });
}
var FetchSingleCustomer = function (request, response) {
    var id = request.params.id;
    var sql = `select * from course where id=${id}`;
    connection.con.query(sql, function (error, result) {
        if (error) {
            console.log(error);
            response.json({ 'error': 'error occured' });
        }
        else {
            //convert fetched data from table into json format 
            var output_as_json = JSON.parse(JSON.stringify(result));
            response.send(output_as_json);
        }
    });
}
var DeleteCourse = function (request, response) {
    var id = request.body.id;
    var sql = `delete from course where id=${id}`;
    connection.con.query(sql, function (error, result) {
        if (error) {
            console.log(error);
            response.json({ 'error': 'error occured' });
        }
        else {
            //convert fetched data from table into json format 
            response.json({ 'message': 'Deleted successfully' });
        }
    });
}
module.exports.FetchSingleCustomer = FetchSingleCustomer
module.exports.DeleteCourse = DeleteCourse
module.exports.InsertCourse = InsertCourse
module.exports.FetchCourse = FetchCourse
module.exports.FetchReligioncourse = FetchReligioncourse
