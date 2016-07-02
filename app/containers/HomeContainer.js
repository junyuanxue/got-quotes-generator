import React from 'react'
import Home from '../components/Home'
import {getQuote} from '../utils/gotQuotesApi'

class HomeContainer extends React.Component {

  constructor(props, context) {
    super(props)
    context.router

    this.state = {
      quote: '',
      character: '',
      searchCharacter: ''
    }
  }

  getQuoteAndSetState(character) {
    getQuote(character)
      .then((quoteData) => {
        this.setState({
          quote: quoteData.quote,
          character: quoteData.character
        })
      })
  }

  handleGetQuote() {
    this.getQuoteAndSetState('')
  }

  handleUpdateCharacter(event) {
    this.setState({
      searchCharacter: event.target.value
    })
  }

  handleSubmitCharacter(event) {
    if (this.state.searchCharacter.toLowerCase() === 'hodor') {
      this.setState({
        quote: 'Hodor.',
        character: 'Hodor'
      })
    } else {
      this.getQuoteAndSetState(this.state.searchCharacter)
    }
  }

  handleClickAddQuote(event) {
    event.preventDefault()
    this.context.router.push('/add-quote/')
  }

  render() {
    return (
      <Home
        onGetQuote={this.handleGetQuote.bind(this)}
        onSubmitCharacter={this.handleSubmitCharacter.bind(this)}
        onUpdateCharacter={this.handleUpdateCharacter.bind(this)}
        quote={this.state.quote}
        character={this.state.character}
        onClickAddQuote={this.handleClickAddQuote.bind(this)} />
    )
  }
}

HomeContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default HomeContainer
