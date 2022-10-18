import React from 'react'

export default function Sentiment(props) {
  return (
    <div  className='sentiment'>
      <h2>Sentiment Analysis</h2>
      <br></br>
      <h3> 960</h3>
      <h3> 122</h3>
      <h3> 321</h3>
      <h1>{props.num1}</h1>
    </div>
  )
}