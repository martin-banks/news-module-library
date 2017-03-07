import React from 'react'

export default class ColorSwatch extends React.Component {
	render(){
		return (
			<li className="colorSwatch">
				<div 
					className="colorSample"
					style={{
						background: this.props.colorValue,
						height: '100px',
						width: '100px',
						borderRadius: '100%'
					}}
				/>
				<h4>
					{this.props.colorName}
				</h4>
				<div className="colorValue">
					{this.props.colorValue}
				</div>
			</li>
		)
	}
}