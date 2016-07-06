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

  handleSubmitQuote() {
    postQuote(this.state.quote, this.state.character)
      .then(function () {
        this.context.router.push({
          pathname: '/',
          state: {
            quote: this.state.quote,
            character: this.state.character
          }
        })
      })
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

AddQuoteContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default AddQuoteContainer
