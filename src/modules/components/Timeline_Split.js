import React from 'react'

import Timeline_Card from '../molecules/Timeline_card'


const timelineContent = {
	title: 'Timeline title',
	intro: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere cumque quasi, sed aspernatur?',

	cards: [
		{
			position: 'left',
			content: [
				{
					type: 'Smallhead',
					content: 'Card kicker'
				},
				{
					type: 'Image_Shadow',
					imagePath: 'https://unsplash.it/200/300/?random'
				},
				{
					type: 'Image_Shadow',
					imagePath: 'https://unsplash.it/200/300/?random'
				},
				{
					type: 'Smallhead',
					content: 'Card title'
				},
				{
					type: 'BodyText',
					content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil facilis cumque assumenda.'
				}
			]
		},

		{
			position: 'right',
			content: [
				{
					type: 'Smallhead',
					content: 'Card kicker'
				},
				{
					type: 'Image_Shadow',
					imagePath: 'https://unsplash.it/200/300/?random'
				},
				{
					type: 'Smallhead',
					content: 'Card title'
				},
				{
					type: 'BodyText',
					content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil facilis cumque assumenda.'
				}
			]
		},

		{
			position: 'left',
			content: [
				{
					type: 'Smallhead',
					content: 'Card kicker'
				},
				{
					type: 'Image_Shadow',
					imagePath: 'https://unsplash.it/200/300/?random'
				},
				{
					type: 'Image_Shadow',
					imagePath: 'https://unsplash.it/200/300/?random'
				},
				{
					type: 'Smallhead',
					content: 'Card title'
				},
				{
					type: 'BodyText',
					content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil facilis cumque assumenda.'
				}
			]
		}
	]
}

export default class Timeline_Split extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			content: timelineContent

		}
		this.createCards = this.createCards.bind(this)
	}

	createCards(){
		return this.state.content.cards.map( card => {
			return <Timeline_Card 
				content={card.content} 
				addStyles={{ transform: `translate3D(${card.position === 'left' ? '-50%,0,0':'50%,0,0'})` }} 
			/>
		})
	}

	render(){
		return(
			<div >
				{this.createCards()}
			</div>
		)
	}

}

Timeline_Split.propTypes = {

}