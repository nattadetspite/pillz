const mysql = require('mysql2');

var config =
{
    host: 'begeekdb.mysql.database.azure.com',
    user: 'adminrickky@begeekdb',
    password: 'Admin1234',
    database: 'mydb',
    port: 3306,
    ssl: true
};
const conn = new mysql.createConnection(config);

conn.connect(
   function (err){
        if (err) {
            console.log("!!! Cannot connect !!! Error:");
            throw err;
        }
        else {
            console.log("Connected!");
            readData();
        }
    });

function readData(){
        conn.query('SELECT * FROM mydb.pills_db',
            function (err, results, fields) {
                if (err) throw err;
                else console.log('Selected ' + results + ' row(s).');
                for (i = 0; i < 20; i++) {
                    console.log('Row: '+i+ JSON.stringify(results[i]));
                }
                console.log('Done.');
            })

};
