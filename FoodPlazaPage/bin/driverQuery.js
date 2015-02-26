
var driverToken = 'No Driver Available Found';


// REQUEST AND FIND DRIVER FROM POSTGRES AND MONGO DB DUE TO RESTAURANTS DB ...


var getDriverToken = function(location) {
    
    // get from location ...
    console.log("[+] Query for driver with location: " + location);
    driverToken = '19b844857e0e76b1e85931c80fa13adf17a17eb151759e56329c9d5b36442b6c';
    return driverToken;
    
};


module.exports.getDriverToken = getDriverToken;

