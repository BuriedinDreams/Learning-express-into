let index = 0; // needs to be a global so that it resets and can pull a new quote.
const quotesData = [
  {
    quote:
      "I'm not going to school just for the academics - I wanted to share ideas, to be around people who are passionate about learning.",
    author: 'Emma Watson',
  },
  {
    quote:
      "Remember there's no such thing as a small act of kindness. Every act creates a ripple with no logical end.",
    author: 'Scott Adams',
  },
  {
    quote: 'Intelligence plus character-that is the goal of true education.',
    author: 'Martin Luther King, Jr.',
  },
];

function getNextQuote() {
  // const quotesData = [
  //   {
  //     quote:
  //       "I'm not going to school just for the academics - I wanted to share ideas, to be around people who are passionate about learning.",
  //     author: 'Emma Watson',
  //   },
  //   {
  //     quote:
  //       "Remember there's no such thing as a small act of kindness. Every act creates a ripple with no logical end.",
  //     author: 'Scott Adams',
  //   },
  //   {
  //     quote: 'Intelligence plus character-that is the goal of true education.',
  //     author: 'Martin Luther King, Jr.',
  //   },
  // ];

  const result = quotesData[index];
  index += 1;
  index = index % quotesData.length; // Ensures the API always returns a value;
  console.log(result);
  return result;
  //
  //
}

// module.exports = getNextQuote; // we are sending the function getNextQuote()

function addQuote(quoteData) {
  quotesData.push(quoteData);
  console.log('Number of new quotes ', quotesData.length);
  return true;
}

module.exports = {
  getNextQuote: getNextQuote,
  addQuote: addQuote,
  quoteList: quotesData,
}; // getNextQuote: getNExtQuote

//                 getNextQuote: getNex
