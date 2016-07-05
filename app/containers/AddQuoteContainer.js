import React from 'react'
import AddQuote from '../components/AddQuote'
import {postQuote} from '../utils/gotQuotesApi'

class AddQuoteContainer extends React.Component {
  constructor(props, context) {
    super(props)
    context.router

    this.state = {
      quote: '',
      character: '',
    }
  }

  handleUpdateQuote(event) {
    this.setState({
      quote: event.target.value
    })
  }

  handleUpdateCharacter(event) {
    this.setState({
      character: event.target.value
    })
  }

  handleSubmitQuote(event) {
    postQuote(this.state.quote, this.state.character)
  }

  render() {
    return (
      <AddQuote
        onUpdateQuote={this.handleUpdateQuote.bind(this)}
        onUpdateCharacter={this.handleUpdateCharacter.bind(this)}
        onSubmitQuote={this.handleSubmitQuote.bind(this)} />
    )
  }
}

export default AddQuoteContainer
