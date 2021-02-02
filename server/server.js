const express = require('express'); // if we don't do ./ it will assume it is a node module.
// console.log('express', express);

// Create our application
const app = express();

const port = 3000;

// INCANTATION
// Share any files inside the "./server/public" folder
app.use(express.static('server/public'));

// Listen for network requests.
app.listen(port, function () {
  // When the server is ready, call this function
  console.log('Listening on:', port);
});
// if you see a EADDRINUSE error,
// run: killall -9 node
// then try running node server code again.
