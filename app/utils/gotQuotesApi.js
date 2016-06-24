import $ from 'jquery'

const URL = 'https://got-quotes.herokuapp.com/quotes'

export function getQuote() {
  return $.get(URL, (quoteData) => {
    return quoteData
  })
}
