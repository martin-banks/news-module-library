import React from 'react'
import styles from './container.css'

export default class ContainerCard extends React.Component {
	constructor(props) {
		super(props)
		/*this.processContent = this.processContent.bind(this)*/
	}

	/*processContent(){
		return this.props.content.join('')
	}
*/
	render(){
		return <div 
				className={styles.card}
				style={this.props.addStyle}
			>
			{this.props.children}
		</div>
	}

}

ContainerCard.propTypes = {
	content: React.PropTypes.array
}