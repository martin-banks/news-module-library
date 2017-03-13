import React from 'react'
import {sampleText} from '../../sampleContent/text'

import styles from '../molecules/HeaderText.css'

import Card from '../atoms/containers/Card'
import ShowMore from '../atoms/buttons/ShowMore'
import BodyContent from '../molecules/BodyText'
import HeaderText from '../molecules/HeaderText'


const openContent = p => [
	<HeaderText />,
	<BodyContent content={p.body} />
]

const closedContent = p =>  [
	<HeaderText />
]

const bodyContent = [
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


export default class CardSimple extends React.Component {
	constructor(props) {
		super(props)
		this.toggleOpen = this.toggleOpen.bind(this)

		this.state = {
			isOpen: false,
			content: closedContent(),
			cardContent: {
				body: bodyContent
			}
		}
	}

	toggleOpen(update){
		if(this.state.isOpen){
			/*let update = this.state
			update.isOpen = false
			update.content = closedContent*/
			this.setState({ isOpen: false })
			this.setState({ content: closedContent(this.state.cardContent) })
		} else {
			this.setState({ isOpen: true })
			this.setState({ content: openContent(this.state.cardContent) })
		}
		
	}

	render(){
		return (
			<div
				className={styles.headerTextContainer}
			>
				<Card>
					{this.state.content}
					
					<ShowMore handleClick={this.toggleOpen} />
				</Card>
				
			</div>
		)
	}

}
/*
HeaderText.propTypes = {

}*/