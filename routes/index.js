/**
 * Created by mlingolu on 9/24/16.
 */

'use strict';

var express =require('express');

var router = express.Router();

router.get('/', function (req,res,next) {
    res.render('index');
});


module.exports=router;