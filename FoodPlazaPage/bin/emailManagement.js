



var passport = require('passport');
var bcrypt = require('bcrypt-nodejs');
var Model = require('./model');
var LocalStrategy = require('passport-local').Strategy;
var passport = require('passport');
var nodemailer = require('nodemailer');



var sendConfirmationMail = function(user, err){
  
    console.log("[*] EMAIL PREPARED FOR USER");
    console.log(user);
    var transporter = nodemailer.createTransport({
                                                 service: '1und1',
                                                 auth: {
                                                 user: 'vincent.bobinski@foodplaza.eu',
                                                 pass: 'Cebede14'
                                                 }
                                                 });
    
    console.log("user.userid: " + user.userid);
    console.log("user.firstname: " + user.firstname);
    console.log("user.token: " + user.token);
    var mailOptions = {
    from: 'Food Plaza Team <vincent.bobinski@foodplaza.eu>',
    to:  user.email,
    subject: 'Food Plaza Confirmation',
    text: '',
    html: '<div style="width:500px;height:200px;background-color:rgba(0, 0, 0, 0.8);color:white;border-radius:20px;font-size:20px;text-align:center;padding:80px;">Hello ' + user.firstname + '</br>Please register your Email by clicking the link beneath!</br></br><a href="http://localhost:3000/verify/' + user.userid + '/' + user.token + '">Confirm your Food Plaza Account</a></div>'
    };
    
    transporter.sendMail(mailOptions, function(error, info){
                         if(error){
                         console.log("[+] ERROR OCCURED");
                         console.log(error);
                         }else{
                         console.log('Message sent: ' + info.response);
                         }
                         });
    
    
    
    

    
    
};


module.exports.sendConfirmationMail = sendConfirmationMail;




















