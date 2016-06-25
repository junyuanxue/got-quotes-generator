import React from 'react'
import Home from '../components/Home'
import {getQuote} from '../utils/gotQuotesApi'

class HomeContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      quote: '',
      character: ''
    }
  }

  handleGetQuote() {
    console.log('***********')
    console.log(getQuote())
    console.log('***********')

    getQuote()
      .then((quoteData) => {
        this.setState({
          quote: quoteData.quote,
          character: quoteData.character
        })
      })
  }

  render() {
    return (
      <Home
        onGetQuote={this.handleGetQuote.bind(this)}
        quote={this.state.quote}
        character={this.state.character} />
    )
  }
}

export default HomeContainer
