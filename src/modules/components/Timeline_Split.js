import React from 'react'

import Timeline_Card from '../molecules/Timeline_card'
import HeaderText from '../molecules/HeaderText'
import Container_Timeline from '../atoms/containers/Container_Timeline'

const timelineContent = {
	header: [
		{
			type: 'Title',
			content: 'Timeline line title here'
		},
		{
			type: 'Intro',
			content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere cumque quasi, sed aspernatur?',
		}
	],

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
		return [
			<div style={{
				position:'absolute',
				width: '100%',
				height: '100%',
				zIndex: "0",
				textAlign: 'center'
			}} >
				<Container_Timeline />
				<Container_Timeline />
			</div>,
			this.state.content.cards.map( card => {
					return <Timeline_Card 
						content={card.content} 
						addStyles={{ transform: `translate3D(${card.position === 'left' ? '-33%,0,0':'33%,0,0'})` }} 
					/>
				})
			]
	}

	render(){
		return(
			<div style={{
				position: 'relative'
			}} >
				<HeaderText content={this.state.content.header} />
				
				<section style={{
					position: 'relative'
				}}  >
					{this.createCards()}
				</section>
				

			</div>
		)
	}

}

Timeline_Split.propTypes = {

}