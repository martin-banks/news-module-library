import React from 'react'

import Kicker from '../atoms/text/Kicker'
import Title from '../atoms/text/Title'
import Intro from '../atoms/text/Intro'
import styles from './HeaderText.css'


const headerContent = [
	{
		type: 'Kicker',
		content: 'Lorem ipsum etc ...'
	},
	{
		type: 'Title',
		content: 'Lorem ipsum etc ...'
	},
	{
		type: 'Intro',
		content: 'Lorem ipsum etc ...'
	}
]



const supportedBlocks = {
	Kicker: p => <Kicker text={p.content} style={p.style} />,
	Title: p => <Title text={p.content}/>,	
	Intro: p => <Intro text={p.content}/>
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
/*
HeaderText.propTypes = {

}*/