import React from 'react'
import {concatClassNames} from '../../../functions/concatClassNames'


export default class Crosshead extends React.Component{
	constructor(props){
		super(props)
	}

	render(){
		return (
			<h3 className={concatClassNames(['crosshead'])}>
				{this.props.text}
			</h3>
		)
	}

}


Crosshead.propTypes = {
	text: React.PropTypes.string.isRequired
}