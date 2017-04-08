/**
 * Created by mlingolu on 9/24/16.
 */

var express =require('express');
var ejs =require('ejs');
var path= require('path');

var bodyParser= require('body-parser');

var router = require('./routes/index');
var app= express();

// Socket.IO
var server = require('http').createServer(app);
var io = require('socket.io')(server);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use(express.static(path.join(__dirname,'public')));

app.set('view engine', 'html');
app.engine('view',ejs.renderFile);

//Routes

app.use('/',router);

server.listen(3000,function () {
    console.log('Ng2-chat application listening on port 3000');
});