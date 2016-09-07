import React, { Component } from 'react'

class Animation extends Component {

  render () {
    return <div className='animation-container'>
      <h1>Follow The Bouncing Sassy Ball!</h1>
      <div id='ballWrapper'>
        <div id='ball' style={{'position': 'absolute'}}></div>
        <div id='ballShadow'></div>
      </div>
      <div className='car-container'>
        <div className='car'></div>
      </div>
    </div>
  }
}
export default Animation
