import $ from 'jquery'

const BASE = 'https://got-quotes.herokuapp.com/quotes'

const ENDPOINT = 'http://localhost:3000'

export function getQuote(character) {
  let query = '?char=' + character
  let url = BASE + query
  return $.get(url, (quoteData) => {
    return quoteData
  })
}

export function postQuote(quote, character) {
  let url = ENDPOINT + '/quotes'
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
