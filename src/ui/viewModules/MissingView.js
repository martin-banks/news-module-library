import React from 'react'

export default class MissingView extends React.Component {
	render(){
		return (
			<div className="missingView">
				<h1>{`The ${this.props.viewName} view isn't ready yet...`}</h1>
			</div>
		)
	}
}