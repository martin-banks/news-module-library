import React, { Component } from 'react'
import './App.css'
import Title from './modules/atoms/text/Title'


import AtomsText from './ui/views/AtomsText'

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <AtomsText />
      </div>
    )
  }
}

export default App
