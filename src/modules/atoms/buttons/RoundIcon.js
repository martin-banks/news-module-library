import React from 'react'
import style from './buttonStyles.css'
import MaterialIcon from '../icon/MaterialIcon.js'

export default class ButtonRoundIcon extends React.Component {
	constructor(props){
		super(props)
		this.handleClick = this.handleClick.bind(this)
		this.state = { 
			icon: 'add',
			text: 'Show more'
		}
	}

	handleClick(){
		if (this.state.icon === 'add'){
			this.setState({icon: 'close'}) 
		} else {
			this.setState({icon: 'add'})
		}
	}


	render(){
		return (
			<button
				className={style.buttonRound}
				onClick={this.handleClick}
			>
				<MaterialIcon icon={this.state.icon}/>
			</button>
		)
	}
}