import React from 'react'
import styles from './text.css'

export default class Smallhead extends React.Component{
	
	render(){
		return (
			<h3 className={styles.smallHead}>
				{this.props.text}
			</h3>
		)
	}

}


Smallhead.propTypes = {
	text: React.PropTypes.string.isRequired
}