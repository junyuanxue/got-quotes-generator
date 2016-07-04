import React, {PropTypes} from 'react'

function AddQuote (props) {
  return (
    <div className='jumbotron text-center'>
      <textarea
        className='form-control quote-input'
        placeholder='Some epic quote here' />
      <input
        className='form-control char-input'
        placeholder='Who said it?' />
      <button
        className='btn btn-success submit-quote'
        onClick={props.onSubmitCharacter}>
        Submit
      </button>
    </div>
  )
}

export default AddQuote
