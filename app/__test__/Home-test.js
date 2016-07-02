jest.unmock('../containers/HomeContainer')
jest.unmock('../components/Home')
jest.unmock('react-stub-context')

import React from 'react'
import ReactDOM from 'react-dom'
import TestUtils from 'react-addons-test-utils'

import HomeContainer from '../containers/HomeContainer'

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

  xit('gets a GoT quote', () => {
    const {getQuote} = require('../utils/gotQuotesApi')
    let mockQuote = 'I drink and I know things.'
    let mockCharacter = 'Tyrion'
    let mockQuoteData = {
      quote: mockQuote,
      character: mockCharacter
    }

    getQuote.mockReturnValue(mockQuoteData)
    let getQuoteButton = TestUtils.findRenderedDOMComponentWithClass(home, 'get-quote')
    TestUtils.Simulate.click(getQuoteButton)

    let quote = TestUtils.findRenderedDOMComponentsWithClass(home, 'quote')
    let character = TestUtils.findRenderedDOMComponentsWithClass(home, 'character')

    expect(quote.textContent).toEqual(mockQuote)
    expect(character.textContent).toEqual(mockCharacter)
  })

  describe('add quote button', () => {
    it('has a button that prompts the user to add a new quote', () => {
      let addQuoteButton = TestUtils.findRenderedDOMComponentWithClass(home, 'add-quote')
      expect(addQuoteButton).toBeDefined()
    })

    xit('links to the add quote page when add quote button is clicked', () => {
      let addQuoteButton = TestUtils.findRenderedDOMComponentWithClass(home, 'add-quote')
      TestUtils.Simulate.click(addQuoteButton)
      console.log(home)
      expect(window.location.pathname).toEqual('/add-quote')
    })
  })
})
