// set variables for environment
var express = require('express');
var app = express();
var path = require('path');

var accountSid = 'ACf94c2aa2ce344e2cac657cbfe341c3ca'; 
var authToken = '4b7ad4f941cc22dce58f4738479b5623'; 
	
var twilio = require('twilio')(accountSid, authToken); 

app.set('port', (process.env.PORT || 5000));

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade');
app.use(express.static('public'));

app.get('/', function(req, res){
	res.render('index')
});

app.get('/send/:number/:body', function(req, res) { 
	twilio.messages.create({  
		from: "+18564062315",
		to: req.params.number,
		body: req.params.body
	}, function(err, message) { 
		res.send(message);
	});
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
