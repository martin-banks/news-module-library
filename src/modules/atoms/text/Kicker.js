import React from 'react'
import {concatClassNames} from '../../../functions/concatClassNames'


export default class Kicker extends React.Component{
	constructor(props){
		super(props)
	}

	render(){
		return (
			<h6 className={concatClassNames(['kicker'])}>
				{this.props.text}
			</h6>
		)
	}

}


Kicker.propTypes = {
	text: React.PropTypes.string.isRequired
}