console.log('In client.js');

$(document).ready(onReady);

function onReady() {
  console.log("I'm ready, jQuery");

  fetchQuotes();

  $(document).on('submit', '#newQuoteForm', onSubmit);

  // Grab that data from the server
  // GET /allTheQuotes

  // What is AJAX?
  // Asynchronus Javascript and XML
  // it's a tool for making HTTP network requests
  // From client-side javascript code

  // this needs to be in the onReady func

  // You might also see this out in the wild.
  // $.ajax(ajaxOptions = {
  //   url: '/allTheQuotes',
  //   method: 'GET',
  // };)
}

function onSubmit(event) {
  event.preventDefault();

  console.log('onSubmit');

  // grab data from form inputs
  let newQuote = {
    quote: $('#quoteInput').val(),
    author: $('#authorInput').val(),
  };
  console.log('newQuote', newQuote);

  // POST quote data to server
  $.ajax({
    url: '/quotes',
    method: 'POST',
    // this becomes .req.body - data:
    data: {
      quote_to_add: newQuote,
    },
  })
    .then(function () {
      console.log('Huzzah!');
      //
      // Go back to server
      // GET /allTheQuotes again,
      // and re-render
      fetchQuotes();
    })
    .catch(function (error) {
      console.log('Wah Wah', error);
    });
}

function fetchQuotes() {
  let ajaxOptions = {
    url: '/allTheQuotes',
    method: 'GET',
  }; // this basically retrieving data from server.js file on app.get/allTheQuotes

  $.ajax(ajaxOptions) // this needs to be in the onReady func | don't have ";" in this spot. because .then needs to piggyback off of this.
    //Promise
    .then(function (quoteList) {
      // this is original name response,
      console.log('got a response', quoteList);

      $('#quotesList').empty();
      for (let quote of quoteList) {
        console.log(quote);
        $('#quotesList').append(`
        <li>
        <blockquote>
        ${quote.quote} - 
        ${quote.author} 
        </blockquote>
      </li>
        `);
      }
    })

    //
    .catch(function () {
      $('#messages').text('Oh no, something broke, contact IT');
    });

  // Take array of quotes
  // loop d' loop through em'
  // and .append() to the DOM
}
