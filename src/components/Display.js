import React from 'react'

function Display({ data }) {
  const string = data.join('')
  return <div className="Display"> {string} </div>
}

export default Display
