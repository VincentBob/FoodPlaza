



var passport = require('passport');
var bcrypt = require('bcrypt-nodejs');
var Model = require('./model');
var LocalStrategy = require('passport-local').Strategy;
var passport = require('passport');
var emailManagement = require('./emailManagement');
var dataManagement = require('./dataManagement');






// INDEX METHOD ------------------------------------------------------------------------------------------


var getIndex = function(req, res, next) {
    
    if(req.isAuthenticated()) res.redirect('/login');
    res.render('index', {title: 'Login'});
    
};

// -------------------------------------------------------------------------------------------------------








// LOGIN METHODS -----------------------------------------------------------------------------------------


var getLogin = function(req, res, next) {
    
    console.log('[+] req.isAuthenticated(): ');
    
    var user = req.user;
    if(user !== undefined) {
        user = user.toJSON();
    }
    
    if(!req.isAuthenticated()) {
        
        console.log('  [X] not Authenticated');
        res.redirect('/');
        
    } else if(user.confirmed){
        
        console.log('  [V] Authenticated');
        res.render('login', {title: 'Home', user: user});
        
    } else {
        
        emailManagement.sendConfirmationMail(user);
        req.logout();
        res.render('confirmation', {
                   name: user.firstname,
                   mail: user.email
                   });
    }
    
};

var postLogin = function(req, res, next){

    var user = req.body;
    
    passport.authenticate('local', { successRedirect: '/login', failureRedirect: '/'}, function(err, user, info) {

                          if(err) {
                          return res.render('index', {title: 'Sign In', errorMessage: err.message});
                          }
                          
                          if(!user) {
                          return res.render('index', {title: 'Sign In', errorMessage: info.message});
                          }
                          
                          return req.logIn(user, function(err) {
                                           
                                           if(err) {
                                           return res.render('index', {title: 'Sign In', errorMessage: err.message});
                                           } else {
                                           return res.redirect('/login');
                                           }
                                           });
                          })(req, res, next);
};

// -------------------------------------------------------------------------------------------------------








// SIGNUP METHODS ----------------------------------------------------------------------------------------


var getSignUp = function(req, res, next) {
    
    if(req.isAuthenticated()) {
        res.redirect('/');
    } else {
        res.render('signup', {title: 'Sign Up'});
    }
};

var postSignUp = function(req, res, next){
    
    var user = req.body;
    console.log(user);
    var emailPromise = null;
    emailPromise = new Model.User({email: user.email}).fetch();
    
    var token = 0;
    require('crypto').randomBytes(48, function(ex, buf) {
        token = buf.toString('hex');
    });
    
    return emailPromise.then(function(model) {
                             if(model) {
                             console.log("[+] Mail allready exists ... ");
                             res.render('index', {title: 'Sign Up'});
                             } else {
                             
                             var password = user.password;
                             var hash = bcrypt.hashSync(password);
                             
                             var signUpUser = new Model.User({
                                                             email: user.email,
                                                             firstname: user.firstname,
                                                             lastname: user.lastname,
                                                             street: user.street,
                                                             housenumber: user.housenumber,
                                                             postalcode: user.postalcode,
                                                             city: user.city,
                                                             mobile: user.mobile,
                                                             password: hash,
                                                             token: token,
                                                             confirmed: false
                                                             });
                             
                             signUpUser.save().then(function(model) {

                                                    emailManagement.sendConfirmationMail(model.attributes);
                                                    res.render('confirmation', {
                                                               name: model.attributes.firstname,
                                                               mail: model.attributes.email
                                                               });
                                                    
                                                    });
                             }
                             });
    
};

var signUpWithPassport = new LocalStrategy({
                                           usernameField: 'email',
                                           passwordField: 'password'
                                           },function(username, password, done) {
                                           new Model.User({email: username}).fetch().then(function(data) {
                                                                                          
                                                                                          var user = data;
                                                                                          console.log('[*] LOGIN ATEMPT');
                                                                                          
                                                                                          if(user === null) {
                                                                                          return done(null, false, {message: 'Invalid email or password'});
                                                                                          console.log('  [X] not Authenticated');
                                                                                          } else {
                                                                                          user = data.toJSON();
                                                                                          
                                                                                          if(!bcrypt.compareSync(password, user.password)) {
                                                                                          console.log('  [X] not Authenticated');
                                                                                          return done(null, false, {message: 'Invalid email or password'});
                                                                                          } else {
                                                                                          console.log('  [V] Authenticated');
                                                                                          return done(null, user);
                                                                                          }
                                                                                          }
                                                                                          });
                                           
                                           });

// -------------------------------------------------------------------------------------------------------








// SIGN OUT METHODS --------------------------------------------------------------------------------------


var getSignOut = function(req, res, next) {
    
    console.log('[*] getSignOut: ');
    
    if(!req.isAuthenticated()) {
        
        notFound404(req, res, next);
        
    } else {
        
        req.logout();
        res.redirect('/');
        
    }
};

var notFound404 = function(req, res, next) {
    
    res.status(404);
    res.render('404', {title: '404 Not Found'});
    
};

// -------------------------------------------------------------------------------------------------------









// VERIFICATION METHODS ----------------------------------------------------------------------------------


var getVerify = function(req, res, next){
    
    dataManagement.confirmUser(req.params.id, req.params.hash);
    res.redirect('/');
    
};

// -------------------------------------------------------------------------------------------------------







module.exports.getVerify = getVerify;

module.exports.signUpWithPassport = signUpWithPassport;

module.exports.postLogin = postLogin;

module.exports.getLogin = getLogin;

module.exports.getIndex = getIndex;

module.exports.getSignUp = getSignUp;

module.exports.postSignUp = postSignUp;

module.exports.getSignOut = getSignOut;

module.exports.notFound404 = notFound404;


















