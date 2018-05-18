var assert=require('assert');
var base = require('../api/controllers/BaseController');
var sinon=require('sinon');
var results=require('./mock/results.json');

describe('External Profile service',function(){
    it('Profile test',function(done){
        let details={
            loginId:'mananmax'  
        };
        this.timeout(50000);
        var stub1=sinon.stub(sails.models.base,'profile').yields(results['profile']);
        base.profile(details,function(data,err){
            assert.equal(data['FirstName'],'Manan');
            assert.equal(data['LastName'],'Mangal');
            stub1.restore();
            done();
        })
    });
});