import React from 'react'
import style from './buttonStyles.css'
import MaterialIcon from '../icons/MaterialIcon.js'

export default class ButtonSquareText extends React.Component {
	constructor(props){
		super(props)
		this.state = { 
			icon: 'play_arrow',
			text: 'Show more',
			iconClass: ''
		}
	}

	render(){
		return (
			<button
				className={style.buttonText}
			>
				<span>{this.props.text || 'Start'}</span>
				<MaterialIcon icon={this.state.icon}/>
			</button>
		)
	}
}