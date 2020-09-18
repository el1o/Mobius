var url = require('url');
var xml2js = require('xml2js');
var xmlbuilder = require('xmlbuilder');
var util = require('util');
var responder = require('./responder');

exports.build_fcnt = function(request, response, resource_Obj, body_Obj, callback) {
    var rootnm = request.headers.rootnm;
    var {rn, cnd, cr, ...ca} = body_Obj[rootnm];
    resource_Obj[rootnm].cnd = cnd;
    resource_Obj[rootnm].cr = cr ? cr : request.headers['x-m2m-origin'];
    resource_Obj[rootnm].ca = ca;

    callback('1', resource_Obj);
};
