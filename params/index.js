var express= require('express');
var app=express();
app.get('/',function(req,res){
    res.send('root level : ');
  })
app.get('/param/:id',function(req,res){
    res.send('Got param data : '+req.params.id);
  })
 app.listen(3000);