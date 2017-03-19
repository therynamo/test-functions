const creds = require('../.creds');
const twilio = require('twilio')(creds.twilioAccountSid, creds.twilioAuthToken);

const sendMessage = (number, message) => {
  twilio.messages.create({
    to: number,
    from: creds.twilioPhoneNumber,
    body: message,
  }, (err, msg) => console.log(err, msg));
};

module.exports = function smsTest(req, res) {
  switch (req.method) {
    case 'POST':
      sendMessage(req.query.number, req.query.message);
      res.status(200).end();
      break;
    default:
      res.status(403).send({ msg: 'Forbidden!' });
      break;
  }
};
