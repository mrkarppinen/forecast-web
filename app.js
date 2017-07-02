const express = require('express');
const app = express();

app.use(express.static('public'));
app.use('/static', express.static('public'))

app.listen(8080, function () {
  console.log('Forecast app listening on port 8080!');
});