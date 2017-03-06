import React from 'react'
import {concatClassNames} from '../../../functions/concatClassNames'


export default class Smallhead extends React.Component{
	constructor(props){
		super(props)
	}

	render(){
		return (
			<h3 className={concatClassNames(['smallHead'])}>
				{this.props.text}
			</h3>
		)
	}

}


Smallhead.propTypes = {
	text: React.PropTypes.string.isRequired
}