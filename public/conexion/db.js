const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: 'yamanote.proxy.rlwy.net',
    user: 'root',
    password: 'mYOkhnmrpZELitCJKEKdpiVaxvUkfETl',
    port: '56829',
    database: 'railway'
});

connection.connect(err => {
    if(err){
        console.error('Error al conectar a MySQL:', err);
    } else {
        console.log('Conexion a MySQL establecida');
    }
});

module.exports = connection;