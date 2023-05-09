var connection = require("./connection") //our own library
var FetchRegisteruser = function (request, response) {
    var sql = "select email,password,id from register_user order by id desc";
    connection.con.query(sql, function (error, result) {
        if (error) {
            console.log(error);
            response.json({ 'error': 'error occured' });
        }
        else {
            //convert fetched data from table into json format 
            var output_as_json = JSON.parse(JSON.stringify(result));
            if(request.body.email==result.email)
            {
                console.log(result[0])
                if(request.body.password==result[0].password)
                {
                    console.log(result[0].password)
                    request.session['userid']=result[0].id
                    console.log(request.session['userid']);
                    response.send(output_as_json);
                }
            }
        }
    });
}

var InsertUser = function (request, response) {

    var name = request.params.name;
    var password = request.params.password;
    var email = request.params.email;
    var mobileno = request.params.mobileno;
    var country = request.params.country;
    var timezone = request.params.timezone;
    var sql = `insert into register_user(name,password,email,mobileno,country,timezone) values('${name}','${password}','${email}','${mobileno}','${country}','${timezone}')`;
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
var LoginUser = function (request, response) {
    const email = request.params.email;
    const password = request.params.password;

    // console.log(email);
    sql = `select id from register_user where email='${email}' and password='${password}'`;
    console.log(sql);
    connection.con.query(sql, function (error, result) {
    console.log(result);
        if (result.length !=0) {
            console.log("password is correct ")
            request.session.userid = result[0]['id']
            console.log(request.session.userid);
            console.log(request.session.userid)
            response.json({ 'error': 'no','success':'yes','message':'login successfull','id': result[0]['id']});
        }
        else
        {
            response.json({ 'error': 'no','success':'no','message':'invalid login attampt' });
        }
    });
}
var ChangePassworduser = function (request, response) {
    var email = request.params.email;
    // console.log("this is user id " + userid);
    var oldpassword = request.params.oldpassword;
    var email = request.params.email;
    console.log(email);
    var newpassword = request.params.newpassword;
    var confirmpassword = request.params.conpassword;
    var sql = `select password from register_user where email = '${email}'`;
    connection.con.query(sql, function (error, result, fields) {
        console.log(result);
        if (oldpassword == result[0].password) {
            console.log("old password is true ");
            if (newpassword == confirmpassword) {
                console.log("Password is same ");
                var sql2 = `update register_user set password = '${newpassword}' where email = '${email}'`;
                connection.con.query(sql2,function(error,result,fields){
                    console.log(result);
                    request.session.successMsg = "Password changed successfully"
                    response.redirect("/admin_login")
                });
            }
            else {
                console.log("old password is wrong");
                response.redirect("/admin_change_password")
            }
        }
        else {
            console.log("old password is wrong");
            response.redirect("/admin_change_password")
        }
    });
}
module.exports.FetchRegisteruser = FetchRegisteruser
module.exports.ChangePassworduser = ChangePassworduser
module.exports.LoginUser = LoginUser
module.exports.InsertUser = InsertUser