var express = require('express');
var bodyParser= require('body-parser');
var mongoose= require('mongoose');
var fs = require('fs');
var app = express();
Users = require('./models/user'); 


mongoose.connect('mongodb://localhost/logindb');
var db= mongoose.getconnection;
app.use(bodyParser());

app.get('/', function(req, res){
   res.writeHead(200,{'Content-Type':'text/html'});
    fs.readFile('./views/login.html', null, function(error, data){
        if(error){
            res.writeHead(404);
        }else{
            res.write(data);
        }
        res.end();
    });
});

app.post('/login', function(req, res){
    var logbody = req.body;
    console.log(logbody);
    console.log(logbody.toJson);
    Users.addUser(logbody,function(err,logbody){
       if(err){
           throw err;
       } 
        res.json(logbody);
    });
  
});

app.listen(3000);

/*
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
Genre = require('./models/genres');
Book = require('./models/book');
//connect to mongoose
mongoose.connect('mongodb://localhost/bookstore');
var db= mongoose.connection;

app.use(bodyParser.json());


app.get('/', function(req, res){
    res.send('hello');
    
});



app.listen(3000);
console.log('running');
*/