const mysql = require('mysql')
const pool = mysql.createPool({
    password:'Ritikgupta10$',
    user:'root',
    database:'lmkarting',
    host:'localhost',
    port:'3306'
});
//sql: Uv7j5#r1     lmkarting-root
let teamdb={};
teamdb.check = (email) => {
    return new Promise((resolve, reject) => {
        pool.query('select * from team where email=?',[email], (err,results) =>{
            if(err)
            return reject(err);
            return resolve(results);
        });
    });
};

teamdb.add = (req) => {
    console.log('hello');
    console.log(req);
    return new Promise((resolve, reject) => {
        pool.query('insert into team (teamname,captainname,college,city,state,category,phone,email,password,date) values (?,?,?,?,?,?,?,?,?,CURDATE())', 
        [req.teamname, req.captainname, req.college,req.city,req.state, req.category, req.phone,req.email,req.password], (err,results) =>{
            if(err)
            return reject(err);
            return resolve(results);
        });
    });
};
teamdb.show = (req) => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM team', 
        (err,results) =>{
            if(err)
            return reject(err);
            return resolve(results);
        });
    });
};
teamdb.delete = (req) => {
    return new Promise((resolve, reject) => {
        pool.query('DELETE FROM team', 
        (err,results) =>{
            if(err)
            return reject(err);
            return resolve(results);
        });
    });
};

module.exports = teamdb;