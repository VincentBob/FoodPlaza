

// => --> CREATE OBJECT WITH CRUD OPs on DB ! :)

var DB = require('./PGModelSetup.js').DB;

var User = DB.Model.extend({
            tableName: 'users',
            idAttribute: 'userid',
            });

var Driver = DB.Model.extend({
            tableName: 'drivers',
            idAttribute: 'driverid',
            });

module.exports = {
User: User,
Driver: Driver
};


