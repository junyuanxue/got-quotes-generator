import $ from 'jquery'

const BASE = 'https://got-quotes.herokuapp.com/quotes'

export function getQuote(character) {
  let query = '?char=' + character
  let url = BASE + query
  return $.get(url, (quoteData) => {
    return quoteData
  })
}
