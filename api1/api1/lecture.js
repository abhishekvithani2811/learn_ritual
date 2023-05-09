// lecture
var connection = require("./connection") //our own library
var InsertLecture = function (request, response) {

    var admissionid   = request.body.admissionid  ;
    var lecturedate  = request.body.lecturedate ;
    var topicname  = request.body.topicname ;
    var detail  = request.body.detail ;
    var userremarks = request.body.userremarks;
    var teacherremarks = request.body.teacherremarks;
    var iscompleted = request.body.iscompleted;
    var isteacheraccepted = request.body.isteacheraccepted;
    var isstudentaccepted = request.body.isstudentaccepted;
    var adminremarks	 = request.body.adminremarks;
    var reviewnotes = request.body.reviewnotes;
   

    var sql = `insert into lecture(admissionid ,lecturedate ,topicname ,detail ,userremarks,teacherremarks,iscompleted,isteacheraccepted,isstudentaccepted,adminremarks,reviewnotes) values(${admissionid },${lecturedate },'${topicname}','${detail}',${userremarks},${teacherremarks},${iscompleted},${isteacheraccepted},'${isstudentaccepted}',${adminremarks},${reviewnotes})`;
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
var FetchLecture = function (request, response) {
    var sql = "select * from lecture order by id desc";
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
var FetchSingleLecture = function (request, response) {
    id = request.params.id;
    var sql = `select * from lecture where id=${id}`;
    connection.query(sql, function (error, result) {
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
var DeleteLecture = function (request, response) {
    var id = request.body.id;
    var sql = `delete from lecture where id=${id}`;
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

module.exports.InsertLecture = InsertLecture
module.exports.FetchLecture = FetchLecture
module.exports.FetchSingleLecture = FetchSingleLecture
module.exports.DeleteLecture = DeleteLecture
