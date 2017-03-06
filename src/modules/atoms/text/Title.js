import React from 'react'
import {concatClassNames} from '../../../functions/concatClassNames'


export default class Title extends React.Component{
	constructor(props){
		super(props)
	}

	render(){
		return (
			<h1 className={concatClassNames(['title', 'test'])}>
				{this.props.text}
			</h1>
		)
	}

}


Title.propTypes = {
	text: React.PropTypes.string.isRequired
}