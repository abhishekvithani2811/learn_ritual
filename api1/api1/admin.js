var connection = require("./connection") //our own library
var admin_login = function(request,response)
{
    var email = request.body.email;
    var password = request.body.password;
    var sql = `select id from admin where email='${email}' and password='${password}'`
    connection.con.query(sql,function(error,result){
        if(error)
        {
            response.json({'error':'error occured'});
            console.log(error);
        }
        else 
        {
            var output_as_json = JSON.parse(JSON.stringify(result));
            var length = output_as_json.length;
            if(length==0) //invalid email or password
                response.json({'id':-1});
            else
            {
                request.session.adminid = output_as_json[0]['id']; 
                console.log( request.session.adminid);
                response.send(output_as_json);
            }
        }
    });
}
var change_password = function(request,response)
{
    var current_password = request.body.current_password;
    var new_password = request.body.new_password;
    var adminid = request.session.adminid;
    var sql=`update admin set password='${new_password}' where password='${current_password}' and id=${adminid}`;
    connection.con.query(sql,function(error,result){
        if(error)
        {
            response.json({'error':'error occured'});
            console.log(error);
        }
        else 
        {
            response.json({'count':result.affectedRows});
        }
    });
}
module.exports.admin_login = admin_login
module.exports.change_password = change_password
