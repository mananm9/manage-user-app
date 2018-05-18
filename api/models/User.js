/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

/*module.exports = {

  attributes: {
      abc:'string',

      toJSON: function() {
      var obj = this.toObject();
      delete obj.ineff_dtm;
      return obj;
    }
  }
};*/

var sqlDb = require('mssql');
var util = require('util');
var settings = require('../../config/settings');


exports.CheckData = function(req, callback){
    Base.executeSPwithParam('userLogin', req, function(data, err) {
                callback(data[0]['']);
            });
};

exports.UserLogin = function(req, callback){
    var disallowed=/[^a-z0-9_.]/i;
    var loginId=req['loginId'];
    var password=req['password'];
    if(loginId=="" && password=="")
        callback("Both fields are required");
    else if(loginId=="")
        callback("Login Id cannot be empty");
    else if(password=="")
        callback("Password cannot be empty");
    else if(loginId.length<4)
        callback("Login id should be minimum 4 characters");
    else if(loginId.length>50)
        callback("Login Id should be maximum 50 characters");
    else if(password.length<8)
        callback("Password should be minimum 8 characters");
    else if(password.length>50)
        callback("Password should be maximum 50 characters");
    else if(disallowed.test(loginId))
        callback("Login Id cannot contain special characters other than underscore and dot");
    else if(disallowed.test(password))
        callback("Password cannot contain special characters other than underscore and dot");
    else
            User.CheckData(req, function(data, err) {
                callback(data);
            });
}


