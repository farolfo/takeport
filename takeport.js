#!/usr/bin/env node
//     takeport 1.0.0

//     (c) 2015 Franco Arolfo
//     RAML Server may be freely distributed under the MIT license.
//     For all details and documentation:
//     https://github.com/farolfo/takeport

var express = require('express');
var app = express();

var PORT = parseInt(process.argv[2]);

if (isNaN(PORT)) {
    console.log('\'' + process.argv[2] + '\' is not a valid port number.');
    return;
}

app.get('/', function (req, res) {
  res.send('This port is taken by takeport.');
});

app.listen(PORT, function () {

  console.log('Port %s taken...', PORT);

}).on('error', function (e) {

  if (e.code == 'EADDRINUSE') {
    console.log('Port %s is already in use.', PORT);
  }
});
