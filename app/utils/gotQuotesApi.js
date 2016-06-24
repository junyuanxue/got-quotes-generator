import axios from 'axios'

const URL = 'https://got-quotes.herokuapp.com/quotes'

export function getQuote() {
  return axios.get(URL)
    .then((quoteData) => {
      return quoteData.data
    })
}
