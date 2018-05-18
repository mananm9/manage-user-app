/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var baseModel = require('../models/Base');

exports.getUserList = function(req, res){

    baseModel.executeSP('GetAllUserList', function(data, err) {
        if(err) res.json({ error: err.message }, 400);
        res.json(data);
    });
}

exports.GetSearchUserDataPost = function (req, res){
    console.log(req.allParams());
    baseModel.executeSPwithParam('GetSearchDetails', req.allParams(), function(data, err) {
        if(err) res.json({ error: err.message }, 400);
        res.json(data);
    });
}

exports.getUserById = function(req, res){

    baseModel.executeSPwithParam('GetUserDetails', req.allParams(), function(data, err) {
        if(err) res.json({ error: err.message }, 400);
        res.json(data);
    });
}

exports.AddAndUpdateUser = function(req, res){

    baseModel.executeSPwithParam('InsertUserDetails', req.allParams(), function(data, err) {       
        if(err)            
                res.json({ error: err.message }, 400);               
                
                if(data===undefined)
                    {
        res.json(200,"success");
            }
    else
        {
            res.json(200,data.message);
        }
    });
}
exports.UpdateUser = function(req, res){

    baseModel.executeSPwithParam('UpdateUserDetails', req.allParams(), function(data, err) {
        if(err) res.json({ error: err.message }, 400);
        res.json(200,"success");
    });
}

exports.UserLogin = function(req, res){
    User.UserLogin(req, function(data, err) {
        if(err) res.json({ error: err.message }, 400);
        res(data,200);
    });
}