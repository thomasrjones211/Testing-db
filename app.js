const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
var http = require('http');
var port = 3000;


app.use(cors());
app.use(bodyParser.json());
// app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.static(path.join(__dirname, '/../', 'node_modules')));

app.use('/api/questions', require('./routes/questions'));
app.use('/api/tests', require('./routes/tests'));
// app.use('/api', require('./routes/users'));

// app.use('*', function(req, res, next) {
//   res.sendFile('index.html', {root: path.join(__dirname, 'public')});
// });

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  console.log(err);
  res.status(err.status || 500);
  res.json(err);
});

app.listen(3000, function () {
  console.log('App Testapp listening on port 3000!');
});

module.exports = app;
