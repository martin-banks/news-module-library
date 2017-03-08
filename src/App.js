import React, { Component } from 'react'
import './App.css'
import Title from './modules/atoms/text/Title'
import Navigation from './ui/navigation/Navigation'
import {viewController} from './ui/_viewController'
import AtomsText from './ui/views/AtomsText'
import {navOptions} from './ui/navigation/_navOptions'



class App extends Component {
	constructor(props){
		super(props)
		this.changeView = this.changeView.bind(this)
		this.setView = this.setView.bind(this)

		this.state = {
			activeView: {
				group: null,
				view: null
			}
					
		}
	}

	

	changeView(e){
		let activeView = {
			group: e.target.getAttribute('data-group').toLowerCase(),
			view: e.target.getAttribute('data-view').toLowerCase()
		}
		this.setState({activeView: activeView})
	}

	setView(){
		let view = this.state.activeView.view
		let group = this.state.activeView.group
		if (!!view && !!group){
			if(!!viewController[group][view]){
				return viewController[group][view].template
			} else {
				return 'View template missing'
			}
		} else {
			return 'No view set'
		}		
	}



  render() {
    return (
      <div className="App">
        <Navigation
        	changeView={this.changeView}
        />
        <div id="viewContainer">
	        {this.setView()}
        </div>
      </div>
    )
  }
}

export default App
