import React from 'react'
import {sampleText} from '../../sampleContent/text'

import styles from '../molecules/HeaderText.css'

import Card from '../atoms/containers/Card'
import ShowMore from '../atoms/buttons/ShowMore'
import BodyContent from '../molecules/BodyText'
import HeaderText from '../molecules/HeaderText'



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


const openContent = p => [
	<HeaderText content={p.header} />,
	<BodyContent content={p.body} />
]
const closedContent = p =>  [
	<HeaderText content={p.header} />
]


export default class CardSimple extends React.Component {
	constructor(props) {
		super(props)
		this.toggleOpen = this.toggleOpen.bind(this)

		this.state = {
			isOpen: false,
			content: null,
			cardContent: {
				body: bodyContent,
				header: headerContent
			}
		}
	}

	toggleOpen(update){
		if(this.state.isOpen){
			/* the card is open - time to close it */
			this.setState({ isOpen: false })
			this.setState({ content: closedContent(this.state.cardContent) })
		} else {
			/* the card is closed - time to open it */
			this.setState({ isOpen: true })
			this.setState({ content: openContent(this.state.cardContent) })
		}
	}

	componentWillMount() {
		this.setState({ content: closedContent(this.state.cardContent) })
	}

	render(){
		return (
			<div className={styles.headerTextContainer} >
				<Card>
					{this.state.content}
					<ShowMore handleClick = {this.toggleOpen} />
				</Card>
				
			</div>
		)
	}

}
/*
HeaderText.propTypes = {

}*/