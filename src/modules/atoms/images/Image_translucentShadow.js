import React from 'react'


export default class Image_translucentShadow extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}


	render(){
		let imgSize = {
			width: this.props.imgWidth || '300px',
			height: this.props.imgHeight || '300px'
		}

		let containerStyles = {
			position: 'relative',
			width: imgSize.width,
			height: imgSize.height,
			margin: '0 auto 16px auto'
		}
		let imageStyles = {
			position: 'absolute',
			top: '0',
			left: '0',
			backgroundColor: '#e2e2e2',
			backgroundImage: `url(${this.props.imagePath})`,
			width: imgSize.width,
			height: imgSize.height,
			borderRadius: '8px',
			backgroundPosition: 'center',
			backgroundRepeat: 'no-repeat',
			zIndex: '1'
		}
		let shadowStyles = {
			transform: 'translateY(40px) scale(0.9)',
			filter: 'blur(30px)',
			zIndex: '0'
		}

		Object.assign( shadowStyles, imageStyles )
			
			
		return (
			<div style={containerStyles} >
				<div style={ shadowStyles }></div>
				<div style={ imageStyles }></div>
			</div>
		)
	}
}

Image_translucentShadow.propTypes = {
	imagePath: React.PropTypes.string.isRequired,
	imgWidth: React.PropTypes.string,
	imgHeight: React.PropTypes.string
}