import React from 'react'
import Kicker from '../atoms/text/Kicker'
import Smallhead from '../atoms/text/Smallhead'
import Image_Shadow from '../atoms/images/Image_Shadow'
import BodyText from '../atoms/text/BodyText'
import ContainerCard from '../atoms/containers/Card'

const supportedBlocks = {
	Kicker: p => <Kicker text={p.content} />,
	Image_Shadow: p => <Image_Shadow imagePath={p.imagePath} addStyles={
		{display: 'inline-block', margin: '16px 8px'}
	} />,
	Smallhead: p => <Smallhead text={p.content} />,
	BodyText: p => <BodyText style='bodyTextSerif' text={p.content} />
}




export default class Timeline_Card extends React.Component {
	constructor(props) {
		super(props)
		this.processContent = this.processContent.bind(this)
		this.updateStyles = this.updateStyles.bind(this)
		this.state={
			cardStyles: {
				width: '60%',
				minWidth: '280px',
				textAlign: 'center'
			}
		}
	}

	processContent(){
		return this.props.content.map( block => {
			return supportedBlocks[block.type](block)
		} )
	}

	updateStyles(){
		let stylesToUpdate = this.state.cardStyles
		Object.keys(this.props.addStyles).forEach( addStyle => {
			stylesToUpdate[addStyle] = this.props.addStyles[addStyle]
		})
		this.setState({cardStyles: stylesToUpdate})
	}

	componentWillMount() {
		!!this.props.addStyles ? this.updateStyles() : ''
	}

	render(){
		return (
			<ContainerCard addStyle={this.state.cardStyles} >
				{this.processContent()}
			</ContainerCard>
		)
	}
}


Timeline_Card.propTypes = {
	content: React.PropTypes.array.isRequired,
	addStyles: React.PropTypes.object
}


// transform: !!this.props.addStyle ? this.props.addStyle.transform || 'none' : ''