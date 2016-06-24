jest.unmock('../containers/HomeContainer')
jest.unmock('../components/Home')

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
    let getQuote = TestUtils.findRenderedDOMComponentWithClass(home, 'get-quote')
    expect(getQuote).toBeDefined()
  })

  it('gets a GoT quote', () => {
    let mockQuote = 'I drink and I know things.'
    let mockCharacter = 'Tyrion'

    let getQuote = TestUtils.findRenderedDOMComponentWithClass(home, 'get-quote')
    TestUtils.Simulate.click(getQuote)
    let quote = TestUtils.findRenderedDOMComponentsWithClass(home, 'quote')
    let character = TestUtils.findRenderedDOMComponentsWithClass(home, 'character')

    expect(quote.textContent).toEqual(mockQuote)
    expect(character.textContent).toEqual(mockCharacter)
  })
})
