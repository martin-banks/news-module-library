import React from 'react'
import styles from './text.css'
import {sampleText} from '../../../sampleContent/text'

import ListText from './ListText'



export default class BodyText extends React.Component{
	constructor(props) {
		super(props)
		this.concatStyles = this.concatStyles.bind(this)
	}

	concatStyles(){
		let styleToCheck = styles[this.props.style]
		if(!!styleToCheck){
			return styleToCheck
		} else {
			return styles.bodyTextSerif
		}
	}

	render(){
		return (
			<p className={this.concatStyles()}>
				{this.props.text}
			</p>
		)
	}

}


BodyText.propTypes = {
	text: React.PropTypes.string.isRequired,
	style: React.PropTypes.string
}