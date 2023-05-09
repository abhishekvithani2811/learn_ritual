// Admission

var connection = require("./connection") //our own library
var InsertAdmission = function (request, response) {

    var register_userid  = request.body.register_userid ;
    var teacherid  = request.body.teacherid ;
    var language_courseid  = request.body.language_courseid ;
    var courseid  = request.body.courseid ;
    var isdemo = request.body.isdemo;
    var joiningdate = request.body.joiningdate;
    var transactioncode = request.body.transactioncode;
    var ispaid = request.body.ispaid;
    var iscompleted = request.body.iscompleted;
    var review	 = request.body.review;
    var reviewnotes = request.body.reviewnotes;
   

    var sql = `insert into admission(register_userid ,teacherid ,language_courseid ,courseid ,joiningdate,isdemo,ispaid,transactioncode,iscompleted,review,reviewnotes) values(${register_userid },${teacherid },${language_courseid},${courseid },${joiningdate},${isdemo},${ispaid},'${transactioncode}',${iscompleted},${review},${reviewnotes})`;
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
var InsertFormadmissionstatic = function (request, response) {

    var courseid = request.params.courseid;
    var joiningdate = request.params.joiningdate;
    var teacherid = request.params.teacherid;
    var skypeid = request.params.skypeid;
    var language_courseid = request.params.language_courseid;
    // var courseid  = '5' ;
    // var joiningdate  = '2002' ;
    // var teacherid  = '3' ;
    // var language_courseid  = '9' ;
    
    console.log(courseid);
    var sql = `insert into admission(courseid,joiningdate,skypeid,teacherid,language_courseid) values('${courseid}','${joiningdate}','${skypeid}','${teacherid}','${language_courseid }')`;

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
var InsertFormadmission = function (request, response) {

    var languageid   = request.body.languageid  ;
    var courseid  = '3' ;
    console.log(languageid);
    console.log(courseid);
    var sql = `select language_course.id from language_course where languageid='${languageid}' and courseid='${courseid}' `;

    // var sql = `insert into admission(register_userid ,teacherid ,language_courseid ,courseid ,joiningdate,isdemo,ispaid,transactioncode,iscompleted,review,reviewnotes) values(${register_userid },${teacherid },${language_courseid},${courseid },${joiningdate},${isdemo},${ispaid},'${transactioncode}',${iscompleted},${review},${reviewnotes})`;
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
var FetchAdmission = function (request, response) {
    var sql = "select * from admission order by id desc";
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
var FetchSingleAdmission = function (request, response) {
    id = request.params.id;
    var sql = `select * from admission where id=${id}`;
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
var DeleteAdmission = function (request, response) {
    var id = request.body.id;
    var sql = `delete from admission where id=${id}`;
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
var FetchAdmissiondata = function (request, response) {
    var sql = "select admission.*,register_user.username,course.title from admission,register_user,course where register_user.id=admission.register_userid and course.id=admission.courseid";
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

module.exports.InsertFormadmission = InsertFormadmission
module.exports.InsertAdmission = InsertAdmission
module.exports.FetchAdmission = FetchAdmission
module.exports.InsertFormadmissionstatic = InsertFormadmissionstatic
module.exports.FetchAdmissiondata = FetchAdmissiondata
module.exports.FetchSingleAdmission = FetchSingleAdmission
module.exports.DeleteAdmission = DeleteAdmission
