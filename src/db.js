const mysql = require('mysql');
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('lmoney', 'rootsb', '914262145',{
    host: 'localhost',
    dialect: 'mysql'
});

try{
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
}catch (error){
    console.log('Unable to connect to the database:', error);
}

module.exports = sequelize;

/* const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'rootsb',
    password: '914262145',
    database: 'lmoney' 
});

mysqlConnection.connect( (error)=>{
    if(error) throw error;
    console.log('database is connected');
});
module.exports = mysqlConnection;  */
