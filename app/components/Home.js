import React, {PropTypes} from 'react'

function GetQuoteByCharacter (props) {
  return (
    <div className='get-quote-by-char'>
      <input
        className='form-control'
        placeholder='Jon Snow, Tyrion, Hodor'
        onChange={props.onUpdateCharacter} />
      <button
        className='btn btn-success'
        onClick={props.onSubmitCharacter}>
        Search by Character
      </button>
    </div>
  )
}

function Home (props) {
  return (
    <div className='jumbotron text-center'>
      <div className='inline-flex'>
        <button
          className='get-quote btn btn-success'
          onClick={props.onGetQuote}>
          Random Quote
        </button>
        <GetQuoteByCharacter
          onSubmitCharacter={props.onSubmitCharacter}
          onUpdateCharacter={props.onUpdateCharacter} />
      </div>
      <p className='quote'>{props.quote}</p>
      <p className='character'>{props.character}</p>
    </div>
  )
}

Home.propTypes = {
  onGetQuote: PropTypes.func.isRequired,
  onSubmitCharacter: PropTypes.func.isRequired,
  onUpdateCharacter: PropTypes.func.isRequired,
  quote: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired
}

export default Home
