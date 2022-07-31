const express = require('express');
const router = express.Router();
const twilio = require('twilio');

const TWILIO_ACCOUNT_SID = "ACd34d4519566a4062512bcc9617a480fc";
const TWILIO_AUTH_TOKEN = "14bae7747314e2ee0d5110e6ce9ba4c6";
const TWILIO_PHONE_NUMBER = "+12722137284";


const client = new twilio( TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);



router.post('/send-sms', (req, res) => {
    res.header('Content-Type', 'application/json');
    client.messages
      .create({
        from: TWILIO_PHONE_NUMBER,
        to: "+91" + req.body.to,
        body: req.body.body
      })
      .then(() => {
        res.send(JSON.stringify({ success: true }));
      })
      .catch(err => {
        console.log(err);
        res.send(JSON.stringify({ success: false }));
      });
});

// client.messages.create({
//     body: 'Ahoy, friend!',
//     to: '+917818836519', 
//     from: TWILIO_PHONE_NUMBER
// })
// .then((message) => console.log(message.sid));




module.exports = router;
