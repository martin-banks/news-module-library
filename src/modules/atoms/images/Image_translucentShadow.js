import React from 'react'


export default class Image_translucentShadow extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render(){
		let containerStyles = {
			position: 'relative'
		}
		let imageStyles = {
			position: 'absolute',
			top: '0',
			left: '0',
			backgroundImage: `url(${this.props.imagePath})`,
			width: '300px',
			height: '300px',
			borderRadius: '8px',
			backgroundPosition: 'center',
			backgroundRepeat: 'no-repeat',
		}
		let shadowStyles = Object.assign( imageStyles, {
			transform: 'translateY(60px) scale(0.8)',
			filter: 'blur(40px)'
		})
			
		return (
			<div style={containerStyles} >
				<div style={shadowStyles}></div>
				<div style={ imageStyles}></div>
			</div>
		)
	}
}

Image_translucentShadow.propTypes = {
	imagePath: React.PropTypes.string.isRequired
}