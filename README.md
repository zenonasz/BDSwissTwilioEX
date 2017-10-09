# Developer Assessment for BDSwiss

SMS promo code ReactJS app using Twilio NodeJS API

## Getting Started
```
git clone https://github.com/zenonasz/BDSwissTwilioEX.git
```
### Prerequisites


Webpack

Local Installation:
```
npm install --save-dev webpack
```

Global Installation:
```
npm install --global webpack
```

### Installing

Install dependencies: 

```
cd BDSwissTwilioEX
npm install
```

open serviceTwilioAPIKeys.js and add your Twilio API keys by replacing the values bellow (Removed mine for security):

```
module.exports = {
  sid: 'TWILIO_ACCOUNT_SID',
  token: 'TWILIO_ACCOUNT_AUTH_TOKEN'
}
```
Build the server and start it (You should have webpack)

```
webpack && node server.js
```

Access the App at port 3000

```
http://localhost:3000/
```
