import React from 'react'
import {concatClassNames} from '../../../functions/concatClassNames'


export default class BodySerif extends React.Component{
	constructor(props){
		super(props)
	}

	render(){
		return (
			<p className={concatClassNames(['bodySerif'])}>
				{this.props.text}
			</p>
		)
	}

}


BodySerif.propTypes = {
	text: React.PropTypes.string.isRequired
}