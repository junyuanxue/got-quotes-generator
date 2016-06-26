import React, {PropTypes} from 'react'

function Home (props) {
  return (
    <div className='jumbotron text-center'>
      <button
        className='get-quote btn btn-success'
        onClick={props.onGetQuote}>
        New Quote
      </button>
      <p>{props.quote}</p>
      <p>{props.character}</p>
    </div>
  )
}

Home.propTypes = {
  onGetQuote: PropTypes.func.isRequired,
  quote: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired
}

export default Home
