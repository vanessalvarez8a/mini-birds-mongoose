var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
var port = 9999;
var app = express();
var mongoUri = 'mongodb://localhost:27017/menu'

app.use(bodyParser.json());
app.use(cors());

mongoose.connect(mongoUri);
mongoose.connection.once('open', function() {
  console.log('connected to mongo at ' + mongoUri);

})

require('./features/sighting/sightingRoutes')(app);


app.listen(port, function() {
  console.log('listening on ' + port);
})
