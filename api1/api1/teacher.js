// teacher
var connection = require("./connection") //our own library
var InsertTeacher = function (request, response) {

    var username = request.params.username;
    var password = request.params.password;
    var email = request.params.email;
    var sql = `insert into teacher (username,password,email) values('${username}','${password}','${email}')`;
    console.log(sql);
    connection.con.query(sql, function (error, result) {
        if (error) {
            console.log(error);
            message = error.message;
            response.json({ 'error': message});
        }
        else {
            response.json({ 'message': 'Register successfully' });
        }
    });
}
var FetchTeacher = function (request, response) {
    var sql = "select * from teacher order by id desc";
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

var LoginTeacher = function (request, response) {
        const email = request.params.email;

        const password = request.params.password;
        // console.log(email);
        sql = `select id from teacher where email='${email}' and password='${password}'`;
        console.log(sql);
        connection.con.query(sql, function (error, result) {
        console.log(result);
            if (result.length !=0) {

                console.log("password is correct ")
                response.json({ 'error': 'no','success':'yes','message':'login successfull','teacherid': result[0]['id']});
            }
            else
            {
                response.json({ 'error': 'no','success':'no','message':'invalid login attampt' });
            }
        });
}
var FetchSingleTeacher = function (request, response) {
    id = request.params.id;
    var sql = `select * from teacher where id=${id}`;
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
var DeleteTeacher = function (request, response) {
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
var FetchOneteatcher = function (request, response) {
    var name = request.params.name;
    var sql = `select name,id from teacher where name='${name}'`;
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
var ChangePasswordteacher= function (request, response) {
    var email = request.params.email;
    console.log(email);
    var oldpassword = request.params.oldpassword;
    var newpassword = request.params.newpassword;
    var confirmpassword = request.params.conformpassword;
    var sql = `select password from teacher where email = '${email}'`;
    console.log(sql)
    connection.con.query(sql, function (error, result, fields) {
        console.log(result);
        if (oldpassword == result[0].password) {
            console.log("old password is true ");
            if (newpassword == confirmpassword) {
                console.log("Password is same ");
                var sql2 = `update teacher set password = '${newpassword}' where email = '${email}'`;
                console.log(sql2)
                connection.con.query(sql2,function(error,result,fields){
                    console.log(result);
                    request.session.successMsg = "Password changed successfully"
                    // response.redirect("/admin_login")
                });
            }
            else {
                console.log("old password is wrong");
                // response.redirect("/admin_change_password")
            }
        }
        else {
            console.log("old password is wrong");
            // response.redirect("/admin_change_password")
        }
    });
}
module.exports.ChangePasswordteacher = ChangePasswordteacher
module.exports.InsertTeacher = InsertTeacher
module.exports.FetchTeacher = FetchTeacher
module.exports.LoginTeacher = LoginTeacher
module.exports.FetchOneteatcher = FetchOneteatcher
module.exports.FetchSingleTeacher = FetchSingleTeacher
module.exports.DeleteTeacher = DeleteTeacher
