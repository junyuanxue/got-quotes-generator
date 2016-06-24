jest.unmock('../containers/HomeContainer')
jest.unmock('../components/Home')

import React from 'react'
import ReactDOM from 'react-dom'
import TestUtils from 'react-addons-test-utils'
import HomeContainer from '../containers/HomeContainer'
import getQuote from '../utils/gotQuotesApi'

describe('Home', () => {
  let home

  beforeEach(() => {
    home = TestUtils.renderIntoDocument(<HomeContainer />)
  })

  it('exits as a component', () => {
    expect(TestUtils.isCompositeComponent(home)).toBeTruthy()
  })

  it('has a button that gets a GoT quote', () => {
    let getQuoteButton = TestUtils.findRenderedDOMComponentWithClass(home, 'get-quote')
    expect(getQuoteButton).toBeDefined()
  })

  it('gets a GoT quote', () => {
    let mockQuote = 'I drink and I know things.'
    let mockCharacter = 'Tyrion'
    let mockQuoteData = {
      quote: mockQuote,
      character: mockCharacter
    }
    let mockGetQuote = getQuote


    let getQuoteButton = TestUtils.findRenderedDOMComponentWithClass(home, 'get-quote')
    TestUtils.Simulate.click(getQuoteButton)
    let quote = TestUtils.findRenderedDOMComponentsWithClass(home, 'quote')
    let character = TestUtils.findRenderedDOMComponentsWithClass(home, 'character')

    expect(quote.textContent).toEqual(mockQuote)
    expect(character.textContent).toEqual(mockCharacter)
  })
})
