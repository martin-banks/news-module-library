import React from 'react'


export default class PreviewContainer extends React.Component {

	
	render(){
		return (
			<div className="elementContainer">
				<h4 className="elementName">{this.props.type}</h4>
				<div className="previewWrapper">
					{this.props.component}
				</div>
			</div>
		)
	}
}