jest.unmock('../containers/HomeContainer')
jest.unmock('../components/Home')

import React from 'react'
import ReactDOM from 'react-dom'
import TestUtils from 'react-addons-test-utils'
import HomeContainer from '../containers/HomeContainer'

describe('Home', () => {

  it('exits as a component', () => {
    const home = TestUtils.renderIntoDocument(<HomeContainer />)
    expect(TestUtils.isCompositeComponent(home)).toBeTruthy()
  })
})
