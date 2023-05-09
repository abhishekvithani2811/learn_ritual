var express = require("express") //downloaded library
var connection = require("./connection") //our own library
var app = express();
var admin = require("./admin") //our own library
var register_user = require("./register_user") //our own library
var course = require("./course") //our own library
var religion = require("./religion") //our own library
var language = require("./language") //our own library
var language_course = require("./language_course") //our own library
var teacher = require("./teacher") //our own library
var admission = require("./admission") //our own library

//npm install express-session
var session = require('express-session'); // for session variables
const { response, request } = require("express");
app.use(express.json());
app.use(express.urlencoded({'extended':true}))
var bodyParser = require('body-parser')
app.use(express.json());
app.use(express.urlencoded({ 'extended': true }))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
 });
 app.use(session({
    secret: 'mySecret',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
  }));
// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });
// app.use(
    //     session({
        //         secret: 'thevithani@2001'  // it is good to use random string
        //     })
        // );
        
        // http://127.0.0.1:5000/admin
        app.post("/admin",(request,response) => admin.admin_login(request,response));
        // http://127.0.0.1:5000/register_user
        app.get("/register_user/:name/:password/:email/:mobileno/:country/:timezone",(request,response)=>register_user.InsertUser(request,response));
        app.get("/login_user/:email/:password",(request,response)=>register_user.LoginUser(request,response));
        app.post("/register_user",(request,response) => register_user.FetchRegisteruser(request,response));
        app.get("/register_user/:email/:newpassword/:oldpassword/:conpassword",(request,response)=>register_user.ChangePassworduser(request,response));
        app.get("/changepassword_teacher/:email/:newpassword/:oldpassword/:conformpassword",(request,response)=>teacher.ChangePasswordteacher(request,response));
//  http://127.0.0.1:5000/course
// app.get("/course",(request,response)=>course.FetchCourse(request,response));
app.get("/all_courses/:religionid",(request,response)=>course.FetchReligioncourse(request,response));
app.delete("/course",(request,response)=>course.DeleteCourse(request,response));
app.get("/course/:id",(request,response)=>course.FetchSingleCustomer(request,response));
//  http://127.0.0.1:5000/religion
app.post("/religion",(request,response)=>religion.InsertReligion(request,response));
app.get("/religion",(request,response)=>religion.FetchReligion(request,response));
app.get("/religion/:id",(request,response)=>religion.FetchSingleReligion(request,response));
app.delete("/religion",(request,response)=>religion.DeleteReligion(request,response));
//  http://127.0.0.1:5000/language
app.post("/language",(request,response)=>language.InsertLanguage(request,response));
app.get("/language",(request,response)=>language.FetchLanguage(request,response));
app.get("/language/:name",(request,response)=>language.FetchOnelanguage(request,response));
app.get("/language/:id",(request,response)=>language.FetchSingleLanguage(request,response));
app.delete("/language",(request,response)=>language.DeleteLanguage(request,response));
//  http://127.0.0.1:5000/language_course
app.post("/course",(request,response)=>course.InsertCourse(request,response));
app.post("/language_course",(request,response)=>language_course.InsertLanguage_course(request,response));
app.get("/language_course",(request,response)=>language_course.FetchLanguage_course(request,response));
app.get("/language_course/:id",(request,response)=>language_course.FetchSingleLanguage_course(request,response));
app.delete("/language_course",(request,response)=>language_course.DeleteLanguage_course(request,response));
//  http://127.0.0.1:5000/teacher
app.get("/teacher/:username/:password/:email",(request,response)=>teacher.InsertTeacher(request,response));
app.get("/loginteacher/:email/:password",(request,response)=>teacher.LoginTeacher(request,response));
app.get("/teacher",(request,response)=>teacher.FetchTeacher(request,response));
app.get("/teacher/:name",(request,response)=>teacher.FetchOneteatcher(request,response));
app.get("/teacher/:course",(request,response)=>teacher.FetchTeacher(request,response));
app.get("/teacher/:id",(request,response)=>teacher.FetchSingleTeacher(request,response));
app.delete("/teacher",(request,response)=>teacher.DeleteTeacher(request,response));
//  http://127.0.0.1:5000/admission
app.get("/joincourse/:courseid/:joiningdate/:skypeid/:teacherid/:language_courseid",(request,response)=>admission.InsertFormadmissionstatic(request,response));
app.post("/admission",(request,response)=>admission.InsertAdmission(request,response));
app.post("/admissionform",(request,response)=>admission.InsertFormadmission(request,response));
app.post("/admission/:id",(request,response)=>admission.InsertFormadmission(request,response));
// app.get("/admission",(request,response)=>admission.FetchAdmission(request,response));
app.get("/admissiondata",(request,response)=>admission.FetchAdmissiondata(request,response));
app.get("/admission/:id",(request,response)=>admission.FetchSingleAdmission(request,response));
app.delete("/admission",(request,response)=>admission.DeleteAdmission(request,response));
//  http://127.0.0.1:5000/teacher
app.get("/teacher/add",(request,response)=>teacher.InsertTeacher(request,response));
//  http://127.0.0.1:5000/teacher/add?username=abc&password=123123&email=abc@gmail.com
app.get("/teacher",(request,response)=>teacher.FetchTeacher(request,response));
app.get("/teacher/:id",(request,response)=>teacher.FetchSingleTeacher(request,response));
app.delete("/teacher",(request,response)=>teacher.DeleteTeacher(request,response));

app.listen(5000,function(error){
    if(error)
    {    console.log("service can not be started....")
        console.log (error)
    }   
        else 
        console.log("service has been started");
});