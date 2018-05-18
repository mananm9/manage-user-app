var user = require('../api/controllers/UserController');
var assert = require('assert');
var sinon = require('sinon');

describe('User Login Tests', function() {
        it('Only Login Id empty', function (done) {
            let details={
          		loginId: '',
  		        password:'testPassword12'
            };
            user.UserLogin(details,function(data, err) {
                assert.equal(data,'Login Id cannot be empty');
                done();
            });
    });  
        it('Only Password empty', function (done) {
            let details={
          		loginId: 'testLogin12',
  		        password:''
            };
            user.UserLogin(details,function(data, err) {
                assert.equal(data,'Password cannot be empty');
                done();
            });
    });  
        it('Both fields empty', function (done) {
            let details={
          		loginId: '',
  		        password:''
            };
            user.UserLogin(details,function(data, err) {
                assert.equal(data,'Both fields are required');
                done();
            });
    });  
        it('Login Id less than minimum length', function (done) {
            let details={
          		loginId: 'a1',
  		        password:'testPassword12'
            };
            user.UserLogin(details,function(data, err) {
                assert.equal(data,'Login id should be minimum 4 characters');
                done();
            });
    });  
        it('Login Id more than maximum length', function (done) {
            let details={
          		loginId: 'abcdefghijkmnopqrstuvwxyzabcdefghijkmnopqrstuvwxyz1234567890',
  		        password:'testPassword12'
            };
            user.UserLogin(details,function(data, err) {
                assert.equal(data,'Login Id should be maximum 50 characters');
                done();
            });
    });  
        it('Password less than minimum length', function (done) {
            let details={
          		loginId: 'testLogin12',
  		        password:'2b'
            };
            user.UserLogin(details,function(data, err) {
                assert.equal(data,'Password should be minimum 8 characters');
                done();
            });
    });  
        it('Password more than maximum length', function (done) {
            let details={
          		loginId: 'testLogin12',
  		        password:'abcdefghijkmnopqrstuvwxyzabcdefghijkmnopqrstuvwxyz1234567890'
            };
            user.UserLogin(details,function(data, err) {
                assert.equal(data,'Password should be maximum 50 characters');
                done();
            });
    });  
        it('Login Id invalid special character 1', function (done) {
            let details={
          		loginId: 'test!@#',
  		        password:'testPassword12'
            };
            user.UserLogin(details,function(data, err) {
                assert.equal(data,'Login Id cannot contain special characters other than underscore and dot');
                done();
            });
    });  
        it('Login Id invalid special character 2', function (done) {
            let details={
          		loginId: 'test)(*&',
  		        password:'testPassword12'
            };
            user.UserLogin(details,function(data, err) {
                assert.equal(data,'Login Id cannot contain special characters other than underscore and dot');
                done();
            });
    });  
        it('Password invalid special character 1', function (done) {
            let details={
          		loginId: 'testLogin12',
  		        password:'test123%^'
            };
            user.UserLogin(details,function(data, err) {
                assert.equal(data,'Password cannot contain special characters other than underscore and dot');
                done();
            });
    });  
        it('Password invalid special character 2', function (done) {
            let details={
          		loginId: 'testLogin12',
  		        password:'test123{}~`'
            };
            user.UserLogin(details,function(data, err) {
                assert.equal(data,'Password cannot contain special characters other than underscore and dot');
                done();
            });
    });  
        it('Login Id does not exist', function (done) {
            let details={
          		loginId: 'test',
  		        password:'testPassword12'
            };
            var stub1=sinon.stub(sails.models.user,'CheckData').yields('Login Id not found. Register to create new account');
            user.UserLogin(details,function(data, err) {
                stub1.restore();
                assert.equal(data,'Login Id not found. Register to create new account');
                done();
            });
    });  
        it('Login Id and Password do not match', function (done) {
            let details={
          		loginId: 'testLogin_12',
  		        password:'testPassword481'
            };
            var stub1=sinon.stub(sails.models.user,'CheckData').yields('Invalid credentials');
            user.UserLogin(details,function(data, err) {
                stub1.restore();
                assert.equal(data,'Invalid credentials');
                done();
            });
    });  
        it('Valid Login Id and Password', function (done) {
            let details={
          		loginId: 'testLogin_12',
  		        password:'testPassword.34'
            };
            var stub1=sinon.stub(sails.models.user,'CheckData').yields('Login Successful');
            user.UserLogin(details,function(data, err) {
                stub1.restore();
                assert.equal(data,'Login Successful');
                done();
            });
    });             
});