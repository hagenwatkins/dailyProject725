

const express = require('express');
const mustache = require('mustache-express');
const data = require('./data');
const mongoClient = require('mongodb').MongoClient;
const router = require('express').Router();
const app = express();

app.use(express.static('public'));
app.engine('mustache', mustache());
app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');

app.get('/', function(req, res){
  res.render('index', data);
})
app.get('/all', function(req, res){
  res.render('all', data);
});

app.get('/details/:id', function(req, res) {
   let person = data.users.find(function(item){
    return item.id == req.params.id;
  });

  console.log('person', person);

  console.log(req.params);

  res.render('details', person);

});

const url = "mongodb://localhost:27017/user_daily_project725";

app.get('/all', function(req, res){
  db.collection('users').find({}).toArray(function(err, results){

    res.render('all',{users:results});

    //res.json(results);
  });
});

app.get('/employed?',function(req, res){
  db.collection('users').find({}).toArray(function(err, results) {


      res.render('all',{users:results})
  });

});



let db;


mongoClient.connect(url, function(err, database){
  if(err){
    console.log(err);
  } else {
    db = database;
    app.listen(3309, function(){
      console.log("mongo stuff");
    });
  }
});
