import React from 'react'
import {concatClassNames} from '../../../functions/concatClassNames'


export default class Crosshead extends React.Component{
	
	render(){
		return (
			<h2 className={concatClassNames(['crosshead'])}>
				{this.props.text}
			</h2>
		)
	}

}


Crosshead.propTypes = {
	text: React.PropTypes.string.isRequired
}