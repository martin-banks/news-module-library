import React, { Component } from 'react'
import './App.css'
import Title from './modules/atoms/text/Title'
import Navigation from './ui/navigation/Navigation'
import {viewController} from './ui/_viewController'
import AtomsText from './ui/views/AtomsText'
import {navOptions} from './ui/navigation/_navOptions'

const initialNavIcon = ()=> {
	return Object.keys(navOptions).reduce( (set, option) => {
		set[option] = 'expand_more'
		return set
	}, {})
}

class App extends Component {
	constructor(props){
		super(props)
		this.changeView = this.changeView.bind(this)
		this.setView = this.setView.bind(this)

		this.state = {
			activeView: {
				group: null,
				view: null
			},
			activeNav: {
				section: null,
				page: null
			}			
		}
	}

	componentWillMount() {
		this.setState({navIcons: initialNavIcon()})
	}

	changeView(e){
		let activeView = {
			group: e.target.getAttribute('data-group').toLowerCase(),
			view: e.target.getAttribute('data-view').toLowerCase()
		}
		let activeNav = {
			activeNavsection: e.target.getAttribute('data-group').toLowerCase(),
			page: e.target.getAttribute('data-view').toLowerCase()
		}
		this.setState({activeView: activeView})
		this.setState({activeNav:activeNav})
		//e.target.setAttribute('data-active', 'true')
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
					activeNav={this.state.activeNav}
					navIcons={this.state.navIcons}
        />
        <div id="viewContainer">
	        {this.setView()}
        </div>
      </div>
    )
  }
}

export default App
