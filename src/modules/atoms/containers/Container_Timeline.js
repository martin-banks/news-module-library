import React from 'react'
import styles from './container.css'

export default class Container_Timeline extends React.Component {
	constructor(props) {
		super(props)
	}

	render(){
		return <div 
				className={styles.timeline}
				style={this.props.addStyle}
			>
			<div className={styles.verticalStripe} ></div>
			{this.props.children || ''}
		</div>
	}

}

Container_Timeline.propTypes = {
	content: React.PropTypes.array

}