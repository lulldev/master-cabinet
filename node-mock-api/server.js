const express = require('express');
const app = express();
const fs = require('fs');

app.use((req, res, next) => {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

function mockFile(filename) {
  return (request, response) => {
    fs.createReadStream(filename).pipe(response);
  };
}

app.get('/auth', mockFile('mocks/Auth.json'));

app.listen(80, function () {
  console.log('Mock web server listening on port 80');
});
