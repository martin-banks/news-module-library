import React from 'react'


export default class Image_Shadow extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render(){
		let containerStyles = {
			position: 'relative',
			display: this.props.addStyles.display || 'block',
			margin: this.props.addStyles.margin || '0 auto 16px auto'
		}
		let imageStyles = {
			top: '0',
			left: '0',
			backgroundColor: '#e2e2e2',
			backgroundImage: `url(${this.props.imagePath})`,
			width: '300px',
			height: '300px',
			borderRadius: '8px',
			backgroundPosition: 'center',
			backgroundRepeat: 'no-repeat',
			backgroundSize: 'cover',
			zIndex: '1',
			boxShadow: '0 8px 30px -8px rgba(0,0,0, 0.8)',
			margin: '0 auto'
		}
		
			
		return (
			<div style={containerStyles} >
				<div style={ imageStyles }></div>
			</div>
		)
	}
}

Image_Shadow.propTypes = {
	imagePath: React.PropTypes.string.isRequired,
	addStyles: React.PropTypes.object
}