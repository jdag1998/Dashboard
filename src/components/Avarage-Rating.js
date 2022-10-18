import React from 'react'

export default function AverageRating(props) {
  return (
    <div  className='average-rating'>
      <h2>Average Rating</h2>
      <br></br>
      <h3> 4.6</h3>
      <h1>{props.num1}</h1>
    </div>
  )
}

