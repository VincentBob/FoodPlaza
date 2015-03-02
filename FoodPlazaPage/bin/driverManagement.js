

var apn = require('apn');
var driverQuery = require('./driverQuery');
var Model = require('./model');
var bcrypt = require('bcrypt-nodejs');

var options = {
    
cert: 'pushCertifications/cert.pem',
key:  'pushCertifications/key.pem',
passphrase: 'Sa89Ga90Vi90',
    
};

var apnConnection = new apn.Connection(options);


function createNoteForDriver(id) {
    
    var note = new apn.Notification();
    
    note.expiry = Math.floor(Date.now() / 1000) + 3600; // Expires 1 hour from now.
    note.badge = 3;
    note.sound = "ping.aiff";
    note.alert = "\u2709 User with id " + id + "has orderd!"; // \uD83D\uDCE7
    note.payload = {'messageFrom': 'Food Plaza'};
    
    return note;
    
};


function getDriverForOrder() {
    
    //var driverToken = '19b844857e0e76b1e85931c80fa13adf17a17eb151759e56329c9d5b36442b6c';
    var driverToken = driverQuery.getDriverToken("no location yet");
    var driverDevice = new apn.Device(driverToken);
    
    return driverDevice;
    
};


var getOrder = function(req, res){
    var params = req.params;
    var user = req.user;
    console.log("[+] User with id: " + req.params.userid + "has ordered");
    if(user !== undefined) {
        user = user.toJSON();
        
        //-----------ORDER MANAGEMENT---------------------------
        
        var note = createNoteForDriver(req.params.userid);
        var driver = getDriverForOrder();
        
        apnConnection.pushNotification(note, driver);
        
        //------------------------------------------------------
        
    };
    res.redirect('/login');
};



var loginDriver = function(req, res) {
    
    console.log(" [+] Driver login");
    
    var email = req.body.email;
    var password = req.body.password; 
    var token = req.body.token;    

    console.log("   [-] EMAIL: " + email);
    console.log("   [-] PASSWORD: " + password);
    console.log("   [-] TOKEN: " + token);
    
    /*
    new Driver({'email': email})
    .fetch()
    .then(function(model) {
          
          if(model) {
          
            console.log("   [*] DRIVER FOUND FOR EMAIL");
            console.log(model.get('password'));
          
          } else {
          
            console.log("   [*] NO DRIVER FOUND FOR EMAIL");
          
          };
          });
     */
    
    
};



var signUpDriver = function(req, res) {
    
    console.log(" [+] Driver signed Up");
    var driver = req.body;
    
    var emailPromise = null;
    console.log(" [+] mail: " + driver.email);
    emailPromise = new Model.Driver({email: driver.email}).fetch();
    
    return emailPromise.then(function(model) {
                             
                             if(model) {
                             
                             //RETURN ERROR
                             //DRIVER ALLREADY EXISTS !!!
                             
                             } else {
                             
                             var password = driver.password;
                             var hash = bcrypt.hashSync(password);
                             
                             var signUpUser = new Model.Driver({
                                                               email: driver.email,
                                                               firstname: driver.firstname,
                                                               lastname: driver.lastname,
                                                               street: driver.street,
                                                               //housenumber: driver.housenumber,
                                                               postalcode: driver.postalcode,
                                                               city: driver.city,
                                                               mobile: driver.mobile,
                                                               token: driver.token,
                                                               confirmed: false,
                                                               password: hash
                                                               });
                             
                             signUpUser.save().then(function(model) {
                                                    
                                                    // SUCCESSFUL SIGNUP ...
                                                    console.log(" [+] SUCCESSFULLY SIGNED UP DRIVER");
                                                    
                                                    });
                             }
                             });
};


module.exports.loginDriver = loginDriver;
module.exports.getOrder = getOrder;
module.exports.signUpDriver = signUpDriver;

