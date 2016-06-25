jest.unmock('../utils/gotQuotesApi')
import {getQuote} from '../utils/gotQuotesApi'
import $ from 'jquery'

describe('getQuote', () => {
  it('makes an ajax request to the Api', () => {
    getQuote()
    expect($.get).toBeCalledWith('https://got-quotes.herokuapp.com/quotes', jasmine.any(Function))
  })
})
