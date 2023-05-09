// language_course
var connection = require("./connection") //our own library
var InsertLanguage_course = function (request, response) {

    var courseid  = request.body.courseid ;
    var languageid = request.body.languageid;

    var sql = `insert into language_course (courseid,languageid) values(${courseid},${languageid})`;
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
var FetchLanguage_course = function (request, response) {
    var sql = "select * from language_course order by id desc";
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
var FetchSingleLanguage_course = function (request, response) {
    var id = request.params.id;
    var sql = `select * from language_course where id=${id}`;
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
var DeleteLanguage_course = function (request, response) {
    var id = request.body.id;
    var sql = `delete from language_course where id=${id}`;
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
module.exports.InsertLanguage_course = InsertLanguage_course
module.exports.FetchLanguage_course = FetchLanguage_course
module.exports.FetchSingleLanguage_course = FetchSingleLanguage_course
module.exports.DeleteLanguage_course = DeleteLanguage_course
