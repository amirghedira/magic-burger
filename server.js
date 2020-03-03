const express = require('express');
const mysql = require('mysql');
const sv = express()
sv.all("/*", function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    next();
});
const db = mysql.createConnection(
    {

        host: 'localhost',
        user: 'root',
        password: '96901171amir',
        database: 'magicburger'
    }
);
db.connect((err) => {

    if (err) {
        console.log(err)
    }
    console.log('connection done to database')

})
sv.get('/ingredients', (req, res) => {
    let sql = "SELECT * FROM ingredients";
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
    })
})
sv.post('/updateingredients/:id/:count', (req, res) => {
    let sql = `update ingredients set count='${req.params.count}' where id='${req.params.id}'`
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
    })
})
sv.listen(3002, () => {
})