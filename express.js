

const express = require('express');
const mustache = require('mustache-express');
const data = require('./data');
const app = express();
app.use(express.static('public'))
app.engine('mustache', mustache());
app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');



app.get('/', function(req, res) {
  res.render('index', data);
});



app.listen(3309, function() {
  console.log('Rocking at port 3309.');
});
