var url = require('url');
var xml2js = require('xml2js');
var xmlbuilder = require('xmlbuilder');
var util = require('util');
var responder = require('./responder');

exports.build_fcnt = function(request, response, resource_Obj, body_Obj, callback) {
    var rootnm = request.headers.rootnm;
    delete body_Obj[rootnm].cntDef;
    resource_Obj[rootnm].customAttributes = body_Obj[rootnm];
    resource_Obj[rootnm].cr = (body_Obj[rootnm].cr) ? body_Obj[rootnm].cr : request.headers['x-m2m-origin'];

    callback('1', resource_Obj);
};
