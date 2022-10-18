import React from 'react'

export default function Reviews(props) {
  return (
    <div  className='reviews'>
      <h2>Reviews</h2>
      <br></br>
      <h3> 1,281</h3>
      <h1>{props.num1}</h1>
    </div>
  )
}