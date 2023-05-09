var connection = require("./connection") //our own library
var InsertReligion = function (request, response) {

    var name  = request.body.name ;
    var detail = request.body.detail;
    var status = request.body.status;

    var sql = `insert into religion (name,detail,status) values('${name}','${detail}',${status})`;
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
var FetchReligion = function (request, response) {
    var sql = "select * from religion order by id desc";
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
var FetchSingleReligion = function (request, response) {
    var id = request.params.id;
    var sql = `select * from religion where id=${id}`;
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
var DeleteReligion = function (request, response) {
    var id = request.body.id;
    var sql = `delete from religion where id=${id}`;
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
module.exports.InsertReligion = InsertReligion
module.exports.FetchSingleReligion = FetchSingleReligion
module.exports.FetchReligion = FetchReligion
module.exports.DeleteReligion = DeleteReligion
