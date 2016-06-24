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
    let button = TestUtils.findRenderedDOMComponentWithClass(home, 'get-quote')
    expect(button).toBeDefined()
  })
})
