import React from 'react'
import styles from './text.css'

export default class Title extends React.Component{
	
	render(){
		return (
			<h1 className={styles.title} >
				{this.props.text}
			</h1>
		)
	}

}


Title.propTypes = {
	text: React.PropTypes.string.isRequired
}