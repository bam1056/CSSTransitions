import React, { Component } from 'react'

class DelayedTransitions extends Component {

  render () {
    let delayGroup = []
    for (let i = 0; i < 10; i++) {
      delayGroup.push(<div className='delay' key={i}><p>{i}</p></div>)
    }
    return <div className='delay-container'>
      <h1>SCSS Delayed Effects</h1>
      <p>This component demonstrates some simple transitions using SASS. Try hovering over the numbers...</p>
      {delayGroup}
    </div>
  }
}

export default DelayedTransitions
