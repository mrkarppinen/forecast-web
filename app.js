const express = require('express');
const app = express();

const http = require('http');
const https = require('https');
const fs = require('fs');

app.use(express.static('public'));
app.use('/static', express.static('public'))


 http.createServer(app.handle.bind(app)).listen(8080, () => {
   console.log('listen in port 8080');
 });
 https.createServer({
   key: fs.readFileSync('key.pem'),
   cert: fs.readFileSync('cert.pem'),
   passphrase: ''
 }, app.handle.bind(app)).listen(8081, () => {
   console.log('listen in port 8081');
 });

 
