import React from 'react'
import styles from './text.css'

export default class Kicker extends React.Component{
	
	render(){
		return (
			<h6 className={styles.kicker}>
				{this.props.text}
			</h6>
		)
	}

}


Kicker.propTypes = {
	text: React.PropTypes.string.isRequired
}