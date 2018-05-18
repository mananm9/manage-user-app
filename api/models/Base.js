/**
 * Base.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

var sqlDb = require('mssql');
var util = require('util');
var settings = require('../../config/settings');


/*exports.executeSql = function(sql,callback){
    sqlDb.close();
    sqlDb.connect(settings.dbConfig)
    .then(function () {
        new sqlDb.Request()
            .query(sql)
            .then(function (dbData) {
                console.log(dbData.recordset);
                callback(dbData.recordset);
            })
            .catch(function (error) {
                console.log(error);
                callback(null,error)
            });
        

    }).catch(function (error) {
        console.log(error);
        callback(null,error)
    }); 
};*/
exports.executeSP = function(proc,callback){
    sqlDb.close();
    sqlDb.connect(settings.dbConfig)
    .then(function(){
        new sqlDb.Request()
        .execute(proc, (err, result) => {
            if(err){
                callback(null,err);
            }
            else{
                callback(result.recordset);
            }
        });
    })
    .catch(function(error){
        callback(null,error);
    });
};
exports.executeSPwithParam = function(proc,reqBody,callback){
    try{        
        if(!reqBody) throw new Error('Input not valid');
        let param = reqBody;
        if(param){
            sqlDb.close();
            sqlDb.connect(settings.dbConfig)
            .then(function(){
                var request=new sqlDb.Request()
                Object.keys(param).forEach(function(key){
                    if(key.includes("\n"))
                    {
                        let data=JSON.parse(key);
                        Object.keys(data).forEach(function(key1){
                        request.input(key1,data[key1])
                        })
                    }
                    else
                        request.input(key,param[key])
                })
                request.execute(proc, (err, result) => {
            if(err){

                callback(null,err);
               

            }
            else{
                if(result.recordsets.length>1)
                    callback(result.recordsets);
                else
                    callback(result.recordset);
            }
                });
            })
            .catch(function(error){
                callback(null,error);
            });
        }
        else{
            throw new Error('Input not valid');
        }
    }
    catch(ex){
        callback(null,ex);
    }
};

exports.profile = function(req, res){
    var soap = require('soap');
    var loginid=req['loginId'];

    var request = require('request');
    var specialRequest = request.defaults({
   rejectUnauthorized:false});
    
   var apiWSDL = '';//put url here

        soap.createClient(apiWSDL, { request : specialRequest },function(err, client) {
            if(err) res.json(err);

            var args = {
                loginId:loginid
            }
            client.GetUserProfileByLoginId(args, function(err, result) {
                if(err) res.json(err);
                if(!result) {
                    res.json(result);
                }
                res(result.GetUserProfileByLoginIdResult);
            });
        }); 
}