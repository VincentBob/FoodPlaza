

var express = require('express');
var pg = require('./PGSetup.js')();
var bcrypt = require('bcrypt-nodejs');



pg.connect(function(err) {
           if(err) {
           return console.error('could not connect to postgres', err);
           }
           });



var confirmUser = function(id, hash){
    
    console.log("[*] START CONFIRMATION");
    
    var token = 0;
    pg.query("SELECT * FROM users WHERE userid='" + id + "'", function(err, result) {
             console.log("[+] RESLUT: " + result)
             if(result){
             
             console.log("[+] ENTERED");
             var row = result.rows[0];
             token = row.token;
             };
             console.log("[+] TOKEN: " + token);
             console.log("[+] HASH: " + hash);
             
             if (token === hash) {
             
             pg.query("UPDATE users set confirmed = 'TRUE' WHERE userid='" + id + "'", function(err, result) {});
             
             };
             });
};


module.exports.confirmUser = confirmUser;
