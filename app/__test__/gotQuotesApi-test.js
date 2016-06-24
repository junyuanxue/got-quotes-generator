jest.unmock('../utils/gotQuotesApi')
jest.unmock('axios')
import {getQuote} from '../utils/gotQuotesApi'
import MockAdapter from 'axios-mock-adapter'
import axios from 'axios'

describe('getQuote', () => {
  it('fetches a quote from Api', () => {
    let mockData = {
      data: {
        quote: 'I drink and I know things.',
        character: 'Tyrion'
      }
    }
    let mockAxios = new MockAdapter(axios)

    const URL = 'https://got-quotes.herokuapp.com/quotes'
    mockAxios.onGet(URL).reply(200, mockData)
    return getQuote().then((result) => {
      expect(result).toEqual(mockData.data)
    })
  })
})
