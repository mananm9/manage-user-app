/**
 * BaseController
 *
 * @description :: Server-side logic for managing Bases
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

exports.profile = function(req, res){
    Base.profile(req, function(data, err) {
        if(err) res.json({ error: err.message }, 400);
        res(data,200);
    });
}