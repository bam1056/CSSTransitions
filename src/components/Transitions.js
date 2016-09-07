import React, { Component } from 'react'

class Transitions extends Component {

  render () {
    let transitionGroup = []
    for (let i = 0; i < 10; i++) {
      transitionGroup.push(<div className='transition' key={i}><p>{i}</p></div>)
    }
    return <div className='transition-container'>
      <h1>SCSS Transition Effects</h1>
      <p>This component demonstrates some simple transitions using SASS. Try hovering over the numbers...</p>
      {transitionGroup}
    </div>
  }
}

export default Transitions
