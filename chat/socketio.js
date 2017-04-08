/**
 * Created by mlingolu on 11/7/16.
 */
var express = require('express');
var app =express();
var http = require('http');
var server = http.createServer(app);
var io = require('socket.io').listen(server);


var chat = {
    
    start : function () {
        
    }
}