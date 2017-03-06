import React from 'react'
import {concatClassNames} from '../../../functions/concatClassNames'


export default class Intro extends React.Component{
	constructor(props){
		super(props)
	}

	render(){
		return (
			<h2 className={concatClassNames(['intro'])}>
				{this.props.text}
			</h2>
		)
	}

}


Intro.propTypes = {
	text: React.PropTypes.string.isRequired
}