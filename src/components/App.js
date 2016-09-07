import React, { Component } from 'react'
import DelayedTransitions from './DelayedTransitions'
import Transformation from './Transformation'
import Animation from './Animation'

class App extends Component {

  render () {
    return <div className='app'>
      <DelayedTransitions />
      <Transformation />
      <Animation />
    </div>
  }
}
export default App
