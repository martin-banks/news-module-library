import React, { Component } from 'react'
import './App.css'
import Title from './modules/atoms/text/Title'
import Navigation from './ui/navigation/Navigation'

import AtomsText from './ui/views/AtomsText'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <div id="viewContainer">
	        <AtomsText />
        </div>
      </div>
    )
  }
}

export default App
