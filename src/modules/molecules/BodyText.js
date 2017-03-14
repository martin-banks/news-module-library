import React from 'react'
import {sampleText} from '../../sampleContent/text'

import styles from './HeaderText.css'

import Crosshead from '../../modules/atoms/text/Crosshead'
import BodyText from '../../modules/atoms/text/BodyText'
import BodySerif from '../../modules/atoms/text/BodySerif'
import BodySans from '../../modules/atoms/text/BodySans'
import Smallhead from '../../modules/atoms/text/Smallhead'
import ListText from '../../modules/atoms/text/ListText'



const supportedBlocks = {
	BodyText: p => <BodyText text={p.content} style={p.style} />,
	Crosshead: p =>  <Crosshead text={p.content}/>,	
	SmallHead: p => <Smallhead text={p.content}/>,
	ListText: p => <ListText type={p.style} items={p.content} />
}


export default class BodyContent extends React.Component {
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
			<div className={styles.headerTextContainer} >
				{this.processContent()}
			</div>
		)
	}

}


BodyContent.propTypes = {
	content: React.PropTypes.array.isRequired
}


/* EXAMPLE OF CONTENT ARRAY
content: [
	{
		type: 'BodyText',
		content: 'Lorem ipsum etc ...'
	},
	{
		type: 'Crosshead',
		content: 'Lorem ipsum etc ...'
	},
	{
		type: 'BodyText',
		content: 'Lorem ipsum etc ...'
	},
	{
		type: 'ListText',
		style: 'number',
		content: [
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
		]
	}
]
		
*/