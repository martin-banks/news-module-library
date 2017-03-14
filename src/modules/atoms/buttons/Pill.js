import React from 'react'
import style from './buttonStyles.css'
import MaterialIcon from '../icons/MaterialIcon.js'

export default class ButtonPill extends React.Component{
	constructor(props) {
		super(props)
		this.state = { 
			icon: 'play_arrow',
			text: 'Show more',
			iconClass: ''
		}	
	}

	render(){
		return (
			<div className={style.Pill} >
				<span>
					{this.props.text || this.state.text}
				</span>
				<div className={style.pillIconContainer} >
					<MaterialIcon icon={this.state.icon}/>
				</div>

			</div>
		)
	}

}


ButtonPill.propTypes = {
	text: React.PropTypes.string
}