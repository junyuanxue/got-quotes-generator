jest.unmock('../containers/AddQuoteContainer')
jest.unmock('../components/AddQuote')

import React from 'react'
import ReactDOM from 'react-dom'
import TestUtils from 'react-addons-test-utils'

import AddQuoteContainer from '../containers/AddQuoteContainer'

describe('AddQuote', () => {
  let addQuote

  beforeEach(() => {
    addQuote = TestUtils.renderIntoDocument(<AddQuoteContainer />)
  })

  it('has a quote input', () => {
    let quoteInput = TestUtils.findRenderedDOMComponentWithClass(addQuote, 'quote-input')
    expect(quoteInput).toBeDefined()
  })

  it('has a character input', () => {

  })

  it('has a submit button', () => {

  })
})
