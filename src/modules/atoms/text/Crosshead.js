import React from 'react'
import styles from './text.css'

export default class Crosshead extends React.Component{
	
	render(){
		return (
			<h2 className={styles.crosshead}>
				{this.props.text}
			</h2>
		)
	}

}


Crosshead.propTypes = {
	text: React.PropTypes.string.isRequired
}