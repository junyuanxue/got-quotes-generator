import $ from 'jquery'

const ENDPOINT = 'http://localhost:3000/quotes'

export function getQuote(character) {
  let query = '?character=' + character
  let url = character === '' ? ENDPOINT : ENDPOINT + query
  return $.get(url, (quoteData) => {
    return quoteData
  })
}

export function postQuote(quote, character) {
  let url = ENDPOINT
  let quoteData = formatQuoteData(quote, character)
  return $.post(url, quoteData)
    .done(function () {
      console.log('Post quote success! :D')
    })
    .fail(function (error) {
      console.log('Failed :(')
    })
}

function formatQuoteData(quote, character) {
  return {
    'quote': {
      'content': quote,
      'character': character
    }
  }
}
