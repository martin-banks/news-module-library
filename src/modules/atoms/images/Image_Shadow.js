import React from 'react'


export default class Image_Shadow extends React.Component {
	constructor(props) {
		super(props)
		this.updateStyles = this.updateStyles.bind(this)
		this.updateImagePath = this.updateImagePath.bind(this)
		this.state = {
			localStyles: {
				container: {
					position: 'relative',
					display: 'block',
					margin: '0 auto 16px auto',
					height: '0',
					width: '100%',
					paddingBottom: '60%',
				},
				image: {
					position: 'absolute',
					top: '0',
					left: '0',
					backgroundColor: '#e2e2e2',
					//backgroundImage: '',
					width: '100%',
					height: '100%',
					borderRadius: '8px',
					backgroundPosition: 'center',
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover',
					zIndex: '1',
					boxShadow: '0 16px 32px -16px rgba(0,0,0, 0.8)',
					margin: '0 auto'
				},
				
			}
			
		}
	}

	updateStyles(){
		let stylesToUpdate = this.state.localStyles
		Object.keys(this.props.addStyles).forEach( element => {
			Object.keys(this.props.addStyles[element]).forEach( addStyle => {
				stylesToUpdate[element][addStyle] = this.props.addStyles[element][addStyle]
			})
		})
		this.setState({cardStyles: stylesToUpdate})
	}

	updateImagePath(){
		let updateStyles = this.state.localStyles
		updateStyles.image.backgroundImage = `url(${this.props.imagePath})`
		this.setState({localStyles: updateStyles})
	}

	componentWillMount() {
		!!this.props.addStyles ? this.updateStyles() : ''
		this.updateImagePath()
	}

	render(){
		return (
			<div style={ this.state.localStyles.container } >
				<div style={ this.state.localStyles.image }></div>
			</div>
		)
	}
}

Image_Shadow.propTypes = {
	imagePath: React.PropTypes.string.isRequired,
	addStyles: React.PropTypes.object
}