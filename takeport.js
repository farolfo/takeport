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
