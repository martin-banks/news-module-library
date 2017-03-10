import React from 'react'
import styles from './text.css'

export default class BodySerif extends React.Component{
	
	render(){
		return (
			<p className={styles.bodyTextSansSerif}>
				{this.props.text}
			</p>
		)
	}

}


BodySerif.propTypes = {
	text: React.PropTypes.string.isRequired
}