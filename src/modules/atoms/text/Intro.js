import React from 'react'
import styles from './text.css'

export default class Intro extends React.Component{
	
	render(){
		return (
			<h4 className={styles.intro}>
				{this.props.text}
			</h4>
		)
	}

}


Intro.propTypes = {
	text: React.PropTypes.string.isRequired
}