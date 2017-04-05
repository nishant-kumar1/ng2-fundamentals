const express = require('express');
const app = express();

app.set('port', (process.env.PORT || 5000));
// Run the app by serving the static files
// in the dist directory
app.use(express.static(__dirname + '/dist'));

// views is directory for all template files
app.set('views', __dirname + '/dist');

app.get('/', function(request, response) {
  response.render('index');
});

// Start the app by listening on the default
// Heroku port
app.listen(app.get('port'), function() {
  console.log('Angular app is running on port', app.get('port'));
});