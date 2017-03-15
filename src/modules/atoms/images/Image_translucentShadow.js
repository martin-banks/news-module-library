import React from 'react'


export default class Image_translucentShadow extends React.Component {
	constructor(props) {
		super(props)
		this.updateStyles = this.updateStyles.bind(this)
		this.updateImagePath = this.updateImagePath.bind(this)

		this.state = {
			localStyles: {
				container: {
					position: 'relative',
					height: '0',
					width: '100%',
					paddingBottom: '60%',
					margin: '0 auto 16px auto'
				},
				image: {
					position: 'absolute',
					top: '0',
					left: '0',
					backgroundColor: '#e2e2e2',
					//backgroundImage: `url()`,
					width: '100%',
					height: '100%',
					borderRadius: '8px',
					backgroundPosition: 'center',
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover',
					zIndex: '1'
				},
				shadow: {
					transform: 'translateY(40px) scale(0.9)',
					filter: 'blur(30px)',
					zIndex: '0'
				}
			}
		}
			
	}


	updateStyles(){
		console.log('processing styles', this.props.addStyles)
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
		Object.assign( updateStyles.shadow, updateStyles.image )
		this.setState({localStyles: updateStyles})
	}

	componentWillMount() {
		!!this.props.addStyles ? this.updateStyles() : ''
		this.updateImagePath()
		
	}


	render(){		
		return (
			<div style={ this.state.localStyles.container } >
				<div style={ this.state.localStyles.shadow }></div>
				<div style={ this.state.localStyles.image }></div>
			</div>
		)
	}
}

Image_translucentShadow.propTypes = {
	imagePath: React.PropTypes.string.isRequired,
	/*imgWidth: React.PropTypes.string,
	imgHeight: React.PropTypes.string,*/
	addStyles: React.PropTypes.object
}