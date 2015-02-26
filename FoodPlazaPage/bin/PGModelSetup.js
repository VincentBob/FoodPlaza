

/*
var pg = require('pg');
var conString = "postgres://postgres:Sa89Ga90Vi90@localhost:5432/testLoginDB";
var db = null;
//var connection = new pg.Client(conString);

module.exports = function () {
    if(!db) {
        db = new pg.Client(conString);
    };
    return db;
};
 
*/

// all the ORM magic for pg authO setup ...

var Bookshelf = require('bookshelf');

var config = "postgres://postgres:Sa89Ga90Vi90@localhost:5432/foodplaza"; // configString for PG :)

var pg = require('knex')({
            client: 'pg',
            connection: config
});

var DB = require('bookshelf')(pg);

module.exports.DB = DB;


/*
pg.connect(conString, function(err, client, done) {
           
           console.log("[1] example");
           
           client.query("CREATE TEMP TABLE reviews(id SERIAL, author VARCHAR(50), content TEXT)");
           client.query("INSERT INTO reviews(author, content) VALUES($1, $2)",
                        ["mad_reviewer", "I'd buy this any day of the week!!11"]);
           client.query("INSERT INTO reviews(author, content) VALUES($1, $2)",
                        ["calm_reviewer", "Yes, that was a pretty good product."]);
           client.query("SELECT * FROM reviews", function(err, result) {
                        console.log("Row count: %d",result.rows.length); // 1
                        for (var i = 0; i < result.rows.length; i++) {
                        var row = result.rows[i];
                        console.log("id: " + row.id);
                        console.log("author: " + row.author);
                        console.log("content: " + row.content);
                        }
                        
                        done();
                        });
           });


pg.connect(conString, function(err, client, done) {
           
           console.log("[2] example");
           
           if(err) {
                return console.error('error fetching client from pool', err);
           }
           
           client.query('SELECT $1::int AS number', ['2'], function(err, result) {
           
                        //call `done()` to release the client back to the pool
                        done();
                        
                        if(err) {
                        return console.error('error running query', err);
                        }
                        console.log(result.rows[0].number);
                        console.log( result.rows.length );
    
                        });
            
           });



pg.connect(conString, function(err, client, done) {
           
           if(err) {
           return console.error('error fetching client from pool', err);
           }
           
           console.log("");
           console.log("[+] List of IPUsers");
           
           //client.query("INSERT INTO ipusers(firstname, lastname, eMailAdress) VALUES( $1, $2, $3)", ["Catharina", "Graf", "C@tharinagraf.de"]); // currently at state 9 Users

           client.query("SELECT * FROM ipusers", function(err, result) {
                        
                        console.log("[-] IPUsers count: %d",result.rows.length);
                        console.log("");
                        
                        for (var i = 0; i < result.rows.length; i++) {
                        var row = result.rows[i];
                        console.log("IPID: " + row.ipid);
                        console.log("firstname: " + row.firstname);
                        console.log("lastname: " + row.lastname);
                        console.log("largePictureID: " + row.largeprofilepictureid);
                        console.log("smallPictureID: " + row.smallprofilepictureid);
                        console.log("eMail: " + row.emailadress);
                        }
                        
                        done();
                        });
           });



*/

