import React, {PropTypes} from 'react'

function Home (props) {
  return (
    <div>
      <button
        className='get-quote'
        onClick={props.onGetQuote}>
        New Quote
      </button>
    </div>
  )
}

Home.propTypes = {
  onGetQuote: PropTypes.func.isRequired
}

export default Home
