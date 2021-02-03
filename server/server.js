const express = require('express'); // if we don't do ./ it will assume it is a node module.
// console.log('express', express);

const quotes = require('./modules/quotes');

// const bodyParser = require('body-parser') // old usage of code now used in express

// Create our application
const app = express();

const port = 3000;

// INCANTATION
// Share any files inside the "./server/public" folder
app.use(express.static('server/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // express took over body-parser

// Listen for network requests.
app.listen(port, function () {
  // When the server is ready, call this function
  console.log('Listening on:', port);

  // if you see a EADDRINUSE error,
  // run: killall -9 node
  // then try running node server code again.
});

app.get('/quotes', function (req, res) {
  console.log('GET Request for Quotes!');
  // res.send(quotes.getNextQuote());
  res.send(quotes()); // this is saying it's a function | because it's retrieving the function() from the quotes.js
});
