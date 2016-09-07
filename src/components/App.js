import React, { Component } from 'react'
import Transitions from './Transitions'
import Transformation from './Transformation'
import Animation from './Animation'

class App extends Component {

  render () {
    return <div className='app'>
      <Transitions />
      <Transformation />
      <Animation />
    </div>
  }
}
export default App
