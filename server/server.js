const express = require('express'); // if we don't do ./ it will assume it is a node module.
// console.log('express', express);

// Create our application
const app = express();

const port = 3000;
// Listen for network requests.
app.listen(port, function () {
  // When the server is ready, call this function
  console.log('Listening on:', port);
});
