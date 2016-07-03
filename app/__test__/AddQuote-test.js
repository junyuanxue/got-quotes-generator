jest.unmock('../containers/AddQuoteContainer')
jest.unmock('../components/AddQuote')

import React from 'react'
import ReactDOM from 'react-dom'
import TestUtils from 'react-addons-test-utils'

import AddQuoteContainer from '../containers/AddQuoteContainer'

describe('AddQuote', () => {
  let addQuote

  beforeEach(() => {
    addQuote = TestUtils.renderIntoDocument(<AddQuote />)
  })

  it('has a quote input', () => {

  })

  it('has a character input', () => {

  })

  it('has a submit button', () => {
    
  })
})
