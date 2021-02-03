console.log('In client.js');

$(document).ready(onReady);

function onReady() {
  console.log("I'm ready, jQuery");

  // Grab that data from the server
  // GET /allTheQuotes

  // What is AJAX?
  // Asynchronus Javascript and XML
  // it's a tool for making HTTP network requests
  // From client-side javascript code

  // this needs to be in the onReady func
  let ajaxOptions = {
    url: '/allTheQuotes',
    method: 'GET',
  }; // this basically retrieving data from server.js file on app.get/allTheQuotes

  // You might also see this out in the wild.
  // $.ajax(ajaxOptions = {
  //   url: '/allTheQuotes',
  //   method: 'GET',
  // };)

  $.ajax(ajaxOptions) // this needs to be in the onReady func | don't have ";" in this spot. because .then needs to piggyback off of this.
    //Promise
    .then(function (quoteList) {
      // this is original name response,
      console.log('got a response', quoteList);

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
    });

  // Take array of quotes
  // loop d' loop through em'
  // and .append() to the DOM
}
