import React from 'react'
import AddQuote from '../components/AddQuote'

class AddQuoteContainer extends React.Component {
  handleUpdateQuote(event) {
    console.log(event.target.value)
  }

  handleUpdateCharacter(event) {
    console.log(event.target.value)
  }

  render() {
    return (
      <AddQuote
        onUpdateQuote={this.handleUpdateQuote}
        onUpdateCharacter={this.handleUpdateCharacter} />
    )
  }
}

export default AddQuoteContainer
