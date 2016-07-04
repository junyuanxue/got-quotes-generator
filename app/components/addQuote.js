import React, {PropTypes} from 'react'

function AddQuote (props) {
  return (
    <div className='jumbotron text-center add-quote-container'>
      <textarea
        className='form-control quote-input'
        placeholder='Some epic quote here'
        onChange={props.onUpdateQuote} />
      <input
        className='form-control char-input'
        placeholder='Who said it?'
        onChange={props.onUpdateCharacter} />
      <button
        className='btn btn-success submit-quote'
        onClick={props.onSubmitQuote}>
        Submit
      </button>
    </div>
  )
}

AddQuote.propTypes = {
  onUpdateQuote: PropTypes.func.isRequired,
  onUpdateCharacter: PropTypes.func.isRequired,
  onSubmitQuote: PropTypes.func.isRequired
}

export default AddQuote
