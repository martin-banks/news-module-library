import React from 'react'
import {concatClassNames} from '../../../functions/concatClassNames'
import styles from '../../../styles/text.css'


export default class Title extends React.Component{
	
	render(){
		return (
			<h1 className={concatClassNames(['title'])} >
				{this.props.text}
			</h1>
		)
	}

}


Title.propTypes = {
	text: React.PropTypes.string.isRequired
}