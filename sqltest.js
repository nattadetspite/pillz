
function readData(){
        conn.query('SELECT * FROM pills_db',
            function (err, results, fields) {
                if (err) throw err;
                else console.log('Selected ' + results.length + ' row(s).');
                for (i = 0; i < results.length; i++) {
                    console.log('Row: ' + JSON.stringify(results[i]));
                }
                console.log('Done.');
            })
       conn.end(
           function (err) {
                if (err) throw err;
                else  console.log('Closing connection.')
        });
};
