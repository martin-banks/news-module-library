import React from 'react'

import Kicker from '../atoms/text/Kicker'
import Title from '../atoms/text/Title'
//import Crosshead from '../atoms/text/Crosshead'
import Intro from '../atoms/text/Intro'
import styles from './HeaderText.css'
import Image_translucentShadow from '../atoms/images/Image_translucentShadow'

/*
const headerContent = [
	{
		type: 'Kicker',
		content: 'Lorem ipsum etc ...'
	},
	{
		type: 'Crosshead',
		content: 'Lorem ipsum etc ...'
	},
	{
		type: 'Intro',
		content: 'Lorem ipsum etc ...'
	}
]*/



const supportedBlocks = {
	Kicker: p => <Kicker key="kicker__key__1" text={p.content} style={p.style} />,
	Title: p => <Title key="title__key__1" text={p.content}/>,
	//Crosshead: p => <Crosshead key="__key__1" text={p.content} />,
	Intro: p => <Intro key="intro__key__1" text={p.content}/>,
	'Image_translucentShadow': p => <Image_translucentShadow key="image__key__1" imagePath={p.imagePath} addStyles={p.addStyles}/>
}


export default class HeaderText extends React.Component {
	constructor(props) {
		super(props)	
		this.processContent = this.processContent.bind(this)
	}

	processContent(){
		return this.props.content.map( block => {
			return supportedBlocks[block.type](block)
		} )
	}

	render(){
		return (
			<div className = {styles.headerTextContainer} >
				{this.processContent()}
			</div>
		)
	}

}

HeaderText.propTypes = {
	content: React.PropTypes.array.isRequired
}