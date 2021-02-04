# Cullen Express Intro

### GET /quotes

Returns a new quote, every time you hit it.

Like so:

```json
{
  "quote": "Something pithy",
  "author": "someone smart"
}
```

### POST /quotes

Create a new quote, like

```json
{
  "quote_to_add": {
    "quote": "Something pithy",
    "author": "someone smart"
  }
}
```

another way to think about might be

let quote_to_add = { quote: "something posh", author: "someone smart" }

<!-- Let quote_to_add= { quote: something pithy, author: someone smart} -->
