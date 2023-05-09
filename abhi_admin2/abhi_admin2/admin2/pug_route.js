express = require("express");
app = express();
app.set("view engine","pug");
app.set("views","view");
var bodyParser = require('body-parser');
const session = require('express-session');
const { request } = require('http');
var mysql = require("./connection");
app.use(bodyParser.json());
const path = require('path');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});
app.use(express.static(path.join(__dirname, 'theme')));
app.use(session({
    secret: 'mysecretkey',
    resave: false,
    saveUninitialized: true
}));
app.use(express.static(path.join(__dirname, 'public')));
app.post("/admin_change_password", function (request, response) {
    var adminid = request.session.adminid;
    var oldpassword = request.body.oldpassword;
    var newpassword = request.body.newpassword;
    var confirmpassword = request.body.confirmpassword;
    var sql = `select password from admin where id = '${adminid}'`;
    mysql.con.query(sql, function (error, result, fields) {
        console.log(result);
        if (oldpassword == result[0].password) {
            console.log("old password is true ");
            if (newpassword == confirmpassword) {
                console.log("Password is same ");
                var sql2 = `update admin set password = '${newpassword}' where id = '${adminid}'`;
                mysql.con.query(sql2,function(error,result,fields){
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
});
app.get("/admin_change_password", function (request, response) {
    
    response.render('admin_change_password');
});
app.get("/admin_login", function (request, response) {
    const successMsg = request.session.successMsg;
    request.session.successMsg = null;
    response.render('admin_login', { successMsg: successMsg });
});
app.post("/admin_login", function (request, response) {
    const email = request.body.email;
    const password = request.body.password;
    // console.log(email);
    sql = `Select username,password,id from admin where email='${email}'`
    console.log(sql);
    mysql.con.query(sql, function (error, result, fields) {
        // mysql.ReturnError(error, response);
        console.log(result);
        console.log(result[0]['password']);
        if (result.length === 0) {
            console.log("resulit is empty");
            request.session.successMsg = 'Invalid login attempt';
        }
        else {
            if (password == result[0]['password']) {
                console.log("password is correct ")
                request.session.adminid = result[0]['id']
                request.session.successMsg = 'Login Successfull';
                console.log(request.session.successMsg);
                response.redirect("/cor/")
            }
            else {
                response.redirect('/admin_login');
            }
        }
    });
});
app.get("/language_course",function(request,response){
    var sql = "select * from language_course order by id";
    //run query 
    mysql.con.query(sql,function(error,result){
        if(error)
        {
            console.log(error);
                response.json({'error':'error occured'})
            }
            else 
        {
            //convert result into json
            var output_as_json = JSON.parse(JSON.stringify(result));
            response.render('language_course',{'language_course1':output_as_json});
        }
    })
});
app.get("/admission",function(request,response){
    var sql = "select * from admission order by id ";
    //run query 
    mysql.con.query(sql,function(error,result){
        if(error)
        {
            console.log(error);
            response.json({'error':'error occured'})
        }
        else 
        {
            //convert result into json
            var output_as_json = JSON.parse(JSON.stringify(result));
            response.render('admission',{'all_admission':output_as_json});
        }
    })
});

app.get("/lecture",function(request,response){
    
    var sql = "select * from lecture order by id";
    //run query 
    mysql.con.query(sql,function(error,result){
        if(error)
        {
            console.log(error);
            response.json({'error':'error occured'})
        }
        else 
        {
            //convert result into json
            var output_as_json = JSON.parse(JSON.stringify(result));
            response.render('lecture',{'all_lecture':output_as_json});
        }
    })
});
app.get("/register_user",function(request,response){
    
    var sql = "select * from register_user order by id";
    //run query 
    mysql.con.query(sql,function(error,result){
        if(error)
        {
            console.log(error);
            response.json({'error':'error occured'})
        }
        else 
        {
            //convert result into json
            var output_as_json = JSON.parse(JSON.stringify(result));
            response.render('register_user',{'all_register_user':output_as_json});
        }
    })
});
app.get("/teacher",function(request,response){
    
    var sql = "select * from teacher order by id";
    //run query 
    mysql.con.query(sql,function(error,result){
            if(error)
            {
                console.log(error);
                response.json({'error':'error occured'})
            }
            else 
        {
            //convert result into json
            var output_as_json = JSON.parse(JSON.stringify(result));
            response.render('teacher',{'all_teacher':output_as_json});
        }
    })
});





// app.get("/add_language",function(request,response){
//     response.render('add_language');
// });

// app.post("/add_language/",function(request,response){
//     console.log("post is run")
//     var name = request.body.name;
//     var detail = request.body.detail;
    
//     var sql = `insert into language(name,detail) values('${name}','${detail}')`;
//     mysql.con.query(sql, function (error, result) {
//         if (error) {
//             console.log(error);
//             response.json({ 'error': 'error occured' });
//         }
//         else {
//             response.json({ 'message': 'Register successfully' });
//         }
//         });
        
//     });

// app.get("/add_religion",function(request,response){
//         response.render('add_religion');
//     });
    
// app.post("/add_religion/",function(request,response){
//         console.log("post is run")
//         var name = request.body.name;
//         var detail = request.body.detail;
    
//     var sql = `insert into religion(name,detail) values('${name}','${detail}')`;
//     mysql.con.query(sql, function (error, result) {
//         if (error) {
//             console.log(error);
//             response.json({ 'error': 'error occured' });
//         }
//         else {
//             response.json({ 'message': 'Register successfully' });
//         }
//     });
    
// });


//course

app.get("/add_course_blank",function(request,response){
    response.render('add_course_blank');
});
app.get("/add_course/:id",function(request,response){
    var id = request.params.id;
    var sql = `select * from course where id=${id}`;
    mysql.con.query(sql, function (error, result) {
        if (error) {
            console.log(error);
            response.json({ 'error': 'error occured' });
        }
        else {
            //convert fetched data from table into json format 
            var output_as_json = JSON.parse(JSON.stringify(result));
            // response.send(output_as_json);
            console.log(output_as_json);
            response.render('add_course',{'data': output_as_json});
        }
    });
});
app.post("/add_course",function(request,response){Z
    console.log("post is run")
    var religionid = request.body.religionid;
    var title = request.body.title;
    var detail = request.body.detail;
    var duration = request.body.duration;
    var noofhours = request.body.noofhours;
    var price = request.body.price;
    var iscertified = request.body.iscertified;
    var status = request.body.status;
    
    var sql = `insert into course (religionid,title,detail,duration,noofhours,price,iscertified,status) values('${religionid}','${title}','${detail}','${duration}','${noofhours}','${price}','${iscertified}','${status}')`;
    mysql.con.query(sql, function (error, result) {
        if (error) {
            console.log(error);
            response.json({ 'error': 'error occured' });
        }
        else {
            response.json({ 'message': 'Register successfully' });
        }
    });
});
app.post("/update_coures",function(request,response) {
    var religionid = request.body.religionid;
    var title = request.body.title;
    var detail = request.body.detail;
    var duration = request.body.duration;
    var noofhours = request.body.noofhours;
    var price = request.body.price;
    var iscertified = request.body.iscertified;
    var status = request.body.status;
    var id = request.body.id;
    var sql = `update course set title='${title}',religionid='${religionid}',detail='${detail}',duration='${duration}',noofhours='${noofhours}',price='${price}',iscertified='${iscertified}',status='${status}' where id='${id}'`;
    mysql.con.query(sql, function (error, result) {
        if (error) {
            console.log(error);
            response.json({ 'error': 'error occured' });
        }
        else {
            //convert fetched data from table into json format 
            var output_as_json = JSON.parse(JSON.stringify(result));
            response.redirect("/cor/");
        }
    });
});
app.get("/cor/",function(request,response){
    var sql = "select * from course order by id";
    //run query 
    mysql.con.query(sql,function(error,result){
        if(error)
            {
                console.log(error);
                response.json({'error':'error occured'})
            }
        else 
        {
            //convert result into json
            var output_as_json = JSON.parse(JSON.stringify(result));
            console.log(output_as_json)
            response.render('cor',{'all_course':output_as_json});
        }
    })
});
app.get("/delete_course/:id",function(request,response){
    var id = request.params.id;
    var sql = `delete from course where id='${id}'`;
    console.log(sql);
    mysql.con.query(sql, function (error, result) {
        if (error) {
            console.log(error);
            response.json({ 'error': 'error occured' });
        }   
        else {
            //convert fetched data from table into json format 
            response.json({ 'message': result });
        }
    });
});
//language 
app.get("/delete_language/:id",function(request,response){
    var id = request.params.id;
    var sql = `delete from language where id='${id}'`;
    console.log(sql);
    mysql.con.query(sql, function (error, result) {
        if (error) {
            console.log(error);
            response.json({ 'error': 'error occured' });
        }   
        else {
            //convert fetched data from table into json format 
            response.json({ 'message': "data deleted" })
        }
    });
});     
app.get("/add_language_blank",function(request,response){
    response.render('add_language_blank');
});
app.get("/add_language/:id",function(request,response){
    var id = request.params.id;
    var sql = `select * from language where id=${id}`;
    mysql.con.query(sql, function (error, result) {
        if (error) {
            console.log(error);
            response.json({ 'error': 'error occured' });
        }
        else {
            //convert fetched data from table into json format 
            var output_as_json = JSON.parse(JSON.stringify(result));
            // response.send(output_as_json);
            console.log(output_as_json);
            response.render('add_language',{'data': output_as_json});
        }
    });
});
app.post("/add_language",function(request,response){
    console.log("post is run")
    var detail = request.body.detail;
    var name = request.body.name;
    
    var sql = `insert into language (detail,name) values('${detail}','${name}')`;
    mysql.con.query(sql, function (error, result) {
        if (error) {
            console.log(error);
            response.json({ 'error': 'error occured' });
        }
        else {
            response.json({ 'message': 'Register successfully' });
        }
    });
});
app.post("/update_language",function(request,response) {
    var detail = request.body.detail;
    var name = request.body.name;
    var id = request.body.id;
    var sql = `update language set detail='${detail}',name='${name}' where id='${id}'`;
    mysql.con.query(sql, function (error, result) {
        if (error) {
            console.log(error);
            response.json({ 'error': 'error occured' });
        }
        else {
            //convert fetched data from table into json format 
            var output_as_json = JSON.parse(JSON.stringify(result));
            response.redirect("/language/");
        }
    });
});
app.get("/add_language_blank",function(request,response){
    response.render('add_language_blank');
});
app.get("/language",function(request,response){
        
    var sql = "select * from language order by id";
    //run query 
    mysql.con.query(sql,function(error,result){
        if(error)
        {
            console.log(error);
            response.json({'error':'error occured'})
            }
            else 
            {
                //convert result into json
                var output_as_json = JSON.parse(JSON.stringify(result));
                response.render('language',{'all_language':output_as_json});
            }
        })
    });



//religion
app.get("/add_religion_blank",function(request,response){
    response.render('add_language_blank');
});
app.get("/add_religion/:id",function(request,response){
    var id = request.params.id;
    var sql = `select * from religion where id=${id}`;
    mysql.con.query(sql, function (error, result) {
        if (error) {
            console.log(error);
            response.json({ 'error': 'error occured' });
        }
        else {
            //convert fetched data from table into json format 
            var output_as_json = JSON.parse(JSON.stringify(result));
            // response.send(output_as_json);
            console.log(output_as_json);
            response.render('add_religion',{'data': output_as_json});
        }
    });
});
app.post("/add_religion",function(request,response){
    console.log("post is run")
    var detail = request.body.detail;
    var name = request.body.name;
    var status = request.body.status;
    var id = request.body.id;
    var sql = `update religion set name='${name}',detail='${detail}',status='${status}' where id = '${id}' `;
    mysql.con.query(sql, function (error, result) {
        if (error) {    
            console.log(error);
            response.json({ 'error': 'error occured' });
        }
        else {
            response.redirect('/religion');
        }
    });
});
app.post("/update_religion",function(request,response) {
    var detail = request.body.detail;
    var name = request.body.name;
    var id = request.body.id;
    var sql = `update religion set status='${status}',detail='${detail}',name='${name}' where id='${id}'`;
    mysql.con.query(sql, function (error, result) {
        if (error) {
            console.log(error);
            response.json({ 'error': 'error occured' });
        }
        else {
            //convert fetched data from table into json format 
            var output_as_json = JSON.parse(JSON.stringify(result));
            response.redirect("/religion/");
        }
    });
});
app.get("/add_religion_blank",function(request,response){
    response.render('add_religion_blank');
});
app.get("/religion",function(request,response){
        
    var sql = "select * from religion order by id";
    //run query 
    mysql.con.query(sql,function(error,result){
        if(error)
        {
            console.log(error);
            response.json({'error':'error occured'})
            }
            else 
            {
                //convert result into json
                var output_as_json = JSON.parse(JSON.stringify(result));
                response.render('religion',{'all_religion':output_as_json});
            }
        })
    });
app.get("/delete_religion/:id",function(request,response){
        var id = request.params.id;
        var sql = `delete from religion where id='${id}'`;
        console.log(sql);
        mysql.con.query(sql, function (error, result) {
            if (error) {
                console.log(error);
                response.json({ 'error': 'error occured' });
            }   
            else {
                //convert fetched data from table into json format 
                response.json({ 'message': result });
            }
        });
    });
app.listen(2000);
console.log('we are ready');    