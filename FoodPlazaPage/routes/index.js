var express = require('express');
var router = express.Router();

// REQUIRE PASSPORT AND PASSWORD ENCRYPTION ------------------------------------------------------

var passport = require('passport');
var bcrypt = require('bcrypt-nodejs');
var LocalStrategy = require('passport-local').Strategy;
var usersRoute = require('../bin/authentication');
var driverManagement = require('../bin/driverManagement');

// -----------------------------------------------------------------------------------------------


router.get('/', usersRoute.getIndex); // redirect to Login ...


// REQUIRE CUTOM MODEL LIBRARY -------------------------------------------------------------------

var Model = require('../bin/model');  // <-- neccessary ???? enables ORM data with SQL

// -----------------------------------------------------------------------------------------------




// LOGIN MTHODS AND ROUTES -----------------------------------------------------------------------

router.get('/login', usersRoute.getLogin);

router.post('/login', usersRoute.postLogin);

// -----------------------------------------------------------------------------------------------


// SIGNUP MTHODS AND ROUTES ----------------------------------------------------------------------

//router.get('/signup', usersRoute.getSignUp); // <-- not neccessary for view ... 

router.post('/signup', usersRoute.postSignUp);

// -----------------------------------------------------------------------------------------------


// SIGNUOT MTHODS AND ROUTES ---------------------------------------------------------------------


router.get('/signout' , usersRoute.getSignOut);


// -----------------------------------------------------------------------------------------------


// SIGNUOT MTHODS AND ROUTES ---------------------------------------------------------------------


router.get('erorr', usersRoute.notFound404);


// -----------------------------------------------------------------------------------------------



// SIGNUOT MTHODS AND ROUTES ---------------------------------------------------------------------

router.post('/signUpDriver', driverManagement.signUpDriver);

// -----------------------------------------------------------------------------------------------


router.get('/driver', function(req, res) {
           res.render('driver', { title: 'Express' });
           });

router.get('/restaurant', function(req, res) {
           res.render('restaurant', { title: 'Express' });
           });


// OREDR MTHODS AND ROUTES ---------------------------------------------------------------------


router.get('/order/:userid',driverManagement.getOrder);

router.get('/order',function(req, res){
           var params = req.params;
           console.log("[+] User with id: ");
           res.redirect('/login');
           });

// -----------------------------------------------------------------------------------------------




// PASSPORT METHODS ------------------------------------------------------------------------------

passport.use(usersRoute.signUpWithPassport);

passport.serializeUser(function(user, done) {
                       done(null, user.email);
                       });

passport.deserializeUser(function(email, done) {
                         new Model.User({email: email}).fetch().then(function(user) {
                                done(null, user);
                         });
});

// -----------------------------------------------------------------------------------------------




module.exports = router;
