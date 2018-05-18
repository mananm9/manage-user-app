// var UserController = require('../api/controllers/UserController');
// var assert = require('assert');
// var request = require('supertest');
// describe('User Login Tests', function() {
//     it('Only Login Id empty', function(done) {
//       request(sails.hooks.http.app)
//         .post('/userLogin')
//         .send({ loginId: '', password: 'testPassword12' })
//         .expect(200)
//         .then(response => {
//           assert.equal(response.body,'Login Id cannot be empty');
//           done();
//       })
//     });
//     it('Only Password empty', function(done) {
//       request(sails.hooks.http.app)
//         .post('/userLogin')
//         .send({ loginId: 'testLogin12', password: '' })
//         .expect(200)
//         .then(response => {
//           assert.equal(response.body,'Password cannot be empty');
//           done();
//       })
//     });
//     it('Both fields empty', function(done) {
//       request(sails.hooks.http.app)
//         .post('/userLogin')
//         .send({ loginId: '', password: '' })
//         .expect(200)
//         .then(response => {
//           assert.equal(response.body,'Both fields are required');
//           done();
//       })
//     });
//     it('Login Id less than minimum length', function(done) {
//       request(sails.hooks.http.app)
//         .post('/userLogin')
//         .send({ loginId: 'a1', password: 'testPassword12' })
//         .expect(200)
//         .then(response => {
//           assert.equal(response.body,'Login id should be minimum 4 characters');
//           done();
//       })
//     });
//     it('Login Id more than maximum length', function(done) {
//       request(sails.hooks.http.app)
//         .post('/userLogin')
//         .send({ loginId: 'abcdefghijkmnopqrstuvwxyzabcdefghijkmnopqrstuvwxyz1234567890', password: 'testPassword12' })
//         .expect(200)
//         .then(response => {
//           assert.equal(response.body,'Login Id should be maximum 50 characters');
//           done();
//       })
//     });
//     it('Password less than minimum length', function(done) {
//       request(sails.hooks.http.app)
//         .post('/userLogin')
//         .send({ loginId: 'testLogin12', password: '2b' })
//         .expect(200)
//         .then(response => {
//           assert.equal(response.body,'Password should be minimum 8 characters');
//           done();
//       })
//     });
//     it('Password more than maximum length', function(done) {
//       request(sails.hooks.http.app)
//         .post('/userLogin')
//         .send({ loginId: 'testLogin12', password: 'abcdefghijkmnopqrstuvwxyzabcdefghijkmnopqrstuvwxyz1234567890' })
//         .expect(200)
//         .then(response => {
//           assert.equal(response.body,'Password should be maximum 50 characters');
//           done();
//       })
//     });
//     it('Login Id invalid special character 1', function(done) {
//       request(sails.hooks.http.app)
//         .post('/userLogin')
//         .send({ loginId: 'test!@#', password: 'testPassword12' })
//         .expect(200)
//         .then(response => {
//           assert.equal(response.body,'Login Id cannot contain special characters other than underscore and dot');
//           done();
//       })
//     });
//     it('Login Id invalid special character 2', function(done) {
//       request(sails.hooks.http.app)
//         .post('/userLogin')
//         .send({ loginId: 'test)(*&', password: 'testPassword12' })
//         .expect(200)
//         .then(response => {
//           assert.equal(response.body,'Login Id cannot contain special characters other than underscore and dot');
//           done();
//       })
//     });
//     it('Password invalid special character 1', function(done) {
//       request(sails.hooks.http.app)
//         .post('/userLogin')
//         .send({ loginId: 'testLogin12', password: 'test123%^' })
//         .expect(200)
//         .then(response => {
//           assert.equal(response.body,'Password cannot contain special characters other than underscore and dot');
//           done();
//       })
//     });
//     it('Password invalid special character 2', function(done) {
//       request(sails.hooks.http.app)
//         .post('/userLogin')
//         .send({ loginId: 'testLogin12', password: 'test123{}~`' })
//         .expect(200)
//         .then(response => {
//           assert.equal(response.body,'Password cannot contain special characters other than underscore and dot');
//           done();
//       })
//     });
//     it('Login Id does not exist', function (done) {
//       request(sails.hooks.http.app)
//         .post('/userLogin')
//         .send({ loginId: 'test', password: 'test123456' })
//         .expect(200)
//         .then(response => {
//           let xyz=response.body;
//           assert.equal(xyz,'Login Id not found. Register to create new account');
//           done();
//       })
//     });
//     it('Login Id and Password do not match', function (done) {
//       request(sails.hooks.http.app)
//         .post('/userLogin')
//         .send({ loginId: 'testLogin_12', password: 'testPassword481' })
//         .expect(200)
//         .then(response => {
//           let xyz=response.body;
//           assert.equal(xyz,'Invalid credentials');
//           done();
//       })
//     });
//     it('Valid Login Id and Password', function (done) {
//       request(sails.hooks.http.app)
//         .post('/userLogin')
//         .send({ loginId: 'testLogin_12', password: 'testPassword.34' })
//         .expect(200)
//         .then(response => {
//           let xyz=response.body;
//           assert.equal(xyz,'Login Successful');
//           done();
//       })
//     });
// });