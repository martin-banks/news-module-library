import React from 'react'
import style from './Icon.css'

export default class MaterialIcon extends React.Component {
	constructor(props){
		super(props)
		this.concatClass = this.concatClass.bind(this)
	}

	concatClass(){
		return !!this.props.addClass ? style[this.props.addClass] : style.materialIcons
	}

	render(){
		return (

				<i 
					className={this.concatClass()}
				>
					{this.props.icon}
				</i>

		)
	}
}



MaterialIcon.propTypes = {
	icon: React.PropTypes.string.isRequired,
	addClass: React.PropTypes.string
}