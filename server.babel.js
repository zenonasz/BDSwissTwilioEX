import express from 'express';
import path from 'path';
import keys from './serviceTwilioAPIKeys';
import bodyParser from 'body-parser';

const app = express();

app.use('/', express.static('public'));

app.post('/sendsms', bodyParser.json(), (req, res) => {
  var client = require('twilio')(keys.sid, keys.token);
  var hours = new Date().getHours();
  var hours = (hours+24-2)%24; 
  var mid='AM';
  var big='Good morning!';
  if(hours==0){ //At 00 hours we need to show AM
    hours=12;
  }
  else if(hours>12)
  {
    hours=hours%12;
    mid='PM';
	big='Hello!';
  }

  client.sendMessage({
    to: req.body.recipient,
    from: '+1 334-431-3830',
    body: `${big} Your promocode is ${mid}123`
  }, function (err, responseData) {
    if (!err) {
      res.json({"From": responseData.from, "Body": responseData.body});
    }
  });
  console.log(`${big} Your promocode is ${mid}123`);
});

app.listen(process.env.PORT || 3000);