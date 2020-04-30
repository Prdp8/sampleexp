var express = require('express');
var router = express.Router();
/*router.get('/',function(req,res){
    res.send('Hello World');
  })
  router.post('/',function(req,res){
    res.send('Got a post request');
  })*/
  router.put('/',function(req,res){
    res.send('Got a update request from /user');
  })
  router.delete('/product',function(req,res){
    res.send('Got a delete request at /user');
  })
  module.exports = router;
