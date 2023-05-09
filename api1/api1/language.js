// language
var connection = require("./connection") //our own library
var InsertLanguage = function (request, response) {

    var name  = request.body.name ;
    var detail = request.body.detail;

    var sql = `insert into language (name,detail) values('${name}','${detail}')`;
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
var FetchLanguage = function (request, response) {
    var sql = "select * from language order by id desc";
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
var FetchOnelanguage = function (request, response) {
    var name = request.params.name;
    var sql = `select name,id from language  where name='${name}'`;
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
var FetchSingleLanguage = function (request, response) {
    var id = request.params.id;
    var sql = `select * from language where id=${id}`;
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
var DeleteLanguage = function (request, response) {
    var id = request.body.id;
    var sql = `delete from language where id=${id}`;
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
module.exports.InsertLanguage = InsertLanguage
module.exports.FetchLanguage = FetchLanguage
module.exports.FetchOnelanguage = FetchOnelanguage
module.exports.FetchSingleLanguage = FetchSingleLanguage
module.exports.DeleteLanguage = DeleteLanguage
