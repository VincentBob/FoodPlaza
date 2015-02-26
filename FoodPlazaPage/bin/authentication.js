



var passport = require('passport');
var bcrypt = require('bcrypt-nodejs');
var Model = require('./model');
var LocalStrategy = require('passport-local').Strategy;
var passport = require('passport');


var getIndex = function(req, res, next) {
    
    if(req.isAuthenticated()) res.redirect('/login');
    res.render('index', {title: 'Login'});
    
};


var getLogin = function(req, res, next) {
    
    console.log('[+] req.isAuthenticated(): ');
    console.log(req.isAuthenticated());
    
    if(!req.isAuthenticated()) {
        console.log('  [X] not Authenticated');
        res.redirect('/');
    } else {
        
        console.log('  [V] Authenticated');
        var user = req.user;
        
        if(user !== undefined) {
            user = user.toJSON();
        }
        
        console.log("[+] SEARCH FOR USER WITH EMAIL: " + user.email);

        /// <---
        /*
         connection.query("SELECT * FROM users WHERE email = 'vincent@smigla-bobinski.com'", function(err, result) {
         
         if (result !== undefined) {
         
         for (var i = 0; i < result.rows.length; i++) {
         var row = result.rows[i];
         }
            res.render('login', {title: 'Home', user: row});
         }else{
                console.log(err);
                res.redirect('/');
         }
         });
          */
        res.render('login', {title: 'Home', user: user});
    }
    
};

var postLogin = function(req, res, next){
    console.log('[+] BRAKEPOINT [1]');
    var user = req.body;
    console.log(user);
    passport.authenticate('local', { successRedirect: '/login', failureRedirect: '/'}, function(err, user, info) {
                          console.log('[+] BRAKEPOINT [2]');
                          if(err) {
                                console.log('[+] BRAKEPOINT [3]');
                               return res.render('index', {title: 'Sign In', errorMessage: err.message});
                          }
                          
                          if(!user) {
                                console.log('[+] BRAKEPOINT [4]');
                                console.log(user);
                               return res.render('index', {title: 'Sign In', errorMessage: info.message});
                          }
                          
                          return req.logIn(user, function(err) {
                                console.log('[+] BRAKEPOINT [5]');
                          if(err) {
                                return res.render('index', {title: 'Sign In', errorMessage: err.message});
                          } else {
                                return res.redirect('/login');
                          }
                          });
    })(req, res, next);
};

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
    
    return emailPromise.then(function(model) {
                                if(model) {
                                    //res.render('signup', {title: 'signup', errorMessage: 'email already exists'});
                                    res.render('index', {title: 'Sign Up'});
                                } else {
                                
                                //****************************************************//
                                // MORE VALIDATION GOES HERE(E.G. PASSWORD VALIDATION)//
                                //****************************************************//
                                
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
                                                                password: hash
                                                                });
                                
                                signUpUser.save().then(function(model) {
                                                       // sign in the newly registered user
                                                       postLogin(req, res, next);
                                                       //res.render('driver', {title: 'Sign Up'});
                                                       });
                                }
                                });
    
};

var getSignOut = function(req, res, next) {
    console.log('[*] getSignOut: ');
    if(!req.isAuthenticated()) {
        console.log('  [X] not Authenticated');
        notFound404(req, res, next);
    } else {
        console.log('  [V] Authenticated');
        req.logout();
        res.redirect('/');
    }
};

var notFound404 = function(req, res, next) {
    res.status(404);
    res.render('404', {title: '404 Not Found'});
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



module.exports.signUpWithPassport = signUpWithPassport;

module.exports.postLogin = postLogin;

module.exports.getLogin = getLogin;

module.exports.getIndex = getIndex;

module.exports.getSignUp = getSignUp;

module.exports.postSignUp = postSignUp;

module.exports.getSignOut = getSignOut;

module.exports.notFound404 = notFound404;


















