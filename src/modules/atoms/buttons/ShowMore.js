import React from 'react'
import style from './buttonStyles.css'
import MaterialIcon from '../icons/MaterialIcon.js'


let showMoreState = {
	isActive: false,
	text: 'Show more',
	icon: 'expand_more'
}
let showLessState = {
	isActive: true,
	text: 'Show less',
	icon: 'expand_less'
}


export default class ButtonShowMore extends React.Component {
	constructor(props){
		super(props)
		this.state = showMoreState
		this.changeState = this.changeState.bind(this)
	}

	changeState(){
		this.setState(this.state.isActive ? showMoreState : showLessState)
		//this.props.handleClick(this.state.isActive)
		this.props.handleClick()
	}

	render(){
		return (
			<button
				className={style.showMore}
				onClick={this.changeState}
				data-active = {this.state.isActive}
			>
				<span>{this.state.text}</span>
				<MaterialIcon icon={this.state.icon}/>
			</button>
		)
	}
}


ButtonShowMore.propTypes = {
	text: React.PropTypes.string
}


