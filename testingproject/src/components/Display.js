import React from 'react'

const Display = ({ strike, ball, foul, hit, score }) => {
  return (
    <div>
      <p>Strike {strike} </p> 
      <p>Ball {ball}</p>
      <p>Foul {foul}</p>
      <p>Hit {hit}</p>
    </div>

  )
}

export default Display
