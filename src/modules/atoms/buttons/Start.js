import React from 'react'
import style from './buttonStyles.css'

export default class ButtonStart extends React.Component {
	render(){
		console.log('styles', style)
		return (
			<button
				className={style.startButton}
			>
				{this.props.text || 'Start'}
			</button>
		)
	}
}