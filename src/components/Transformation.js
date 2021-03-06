import React, { Component } from 'react'

class Transformation extends Component {
  render () {
    return <div className='transformation-container'>
      <h1>SASS Transformation Effects</h1>
      <p>When you click and hold down the mouse button, you can see some animated transformations</p>
      <div className='transform-one'>
        <div className='skewed-bg'>
          <div className='content'>
            <h1 className='title'>Skewed background with CSS</h1>
            <p className='text'>Well ain't this nifty</p>
          </div>
        </div>
      </div>
    </div>
  }
}
export default Transformation
