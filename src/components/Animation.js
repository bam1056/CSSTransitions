import React, { Component } from 'react'

class Animation extends Component {

  render () {
    return <div className='animation-container'>
    <h1>Follow The Bouncing Sassy Ball!</h1>
      <div id='ballWrapper'>
        <div id='ball' style={{'position': 'absolute'}} />
        <div id='ballShadow' />
      </div>
    </div>
  }
}

export default Animation
