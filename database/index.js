var mysql = require('mysql')
var con = mysql.createPool({
    database:"heroku_f5b964fd01c6149",
    host:"us-cdbr-east-04.cleardb.com",
    user:"b0fa8c8ce35bfc",
    password:"c952ba31"
},
    console.log("conectado a la BD")
) 

module.exports =  con;


// var mysql = require ('mysql')
// var coneccion= mysql.createConnection({
//     database:'directorioalfa',
//     host:'localhost',
//     user:'root',
//     password:'user'
// })

// coneccion.connect(function(error){
//    console.log('este es el error',error)
//    if(error) throw error   
//    console.log('conectado a la base de datos')
// })
// module.exports=coneccion


