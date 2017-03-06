import React from 'react'
import {concatClassNames} from '../../../functions/concatClassNames'


export default class Smallhead extends React.Component{
	constructor(props){
		super(props)
	}

	render(){
		return (
			<h4 className={concatClassNames(['smallHead'])}>
				{this.props.text}
			</h4>
		)
	}

}


Smallhead.propTypes = {
	text: React.PropTypes.string.isRequired
}