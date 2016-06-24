import React from 'react'
import Home from '../components/Home'
import {getQuote} from '../utils/gotQuotesApi'

class HomeContainer extends React.Component {
  

  handleGetQuote() {
    getQuote()
      .then((quoteData) => {
        console.log(quoteData.quote)
        console.log(quoteData.character)
      })
  }

  render() {
    return (
      <Home
        onGetQuote={this.handleGetQuote} />
    )
  }
}

export default HomeContainer
