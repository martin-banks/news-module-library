import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import {sampleText} from '../../sampleContent/text'

import styles from './_CardSimple.css'

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
		type: 'Image_translucentShadow',
		imagePath: 'https://unsplash.it/200/300/?random'
	},
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

/*
const openContent = p => [
		<HeaderText key="header__key__1" content={p.header} />
	,
	<BodyContent style={styles.bodyContentContainer} key="body__key__1" content={p.body} /> 
]

const closedContent = p =>  [
	<HeaderText  key="body__key__1" content={p.header} />
]*/




const makeBodyContent = p => <BodyContent key="body__key__1" content={p.body} />

export default class CardSimple extends React.Component {
	constructor(props) {
		super(props)
		this.toggleOpen = this.toggleOpen.bind(this)
		this.state = {
			isOpen: false,
			content: {
				head: null,
				body: null
			},
			cardContent: {
				body: bodyContent,
				header: headerContent
			}
		}
	}

	toggleOpen(update){
		if(this.state.isOpen){
			/* the card is open - time to close it */
			let newState = this.state
			newState.isOpen = false
			//newState.content.body = <div>'text gone'</div>
			this.setState( newState )

			//this.setState({ content: closedContent(this.state.cardContent) })
		} else {
			/* the card is closed - time to open it */
			let newState = this.state
			newState.isOpen = true
			//newState.content.body = makeBodyContent(this.state.cardContent)
			this.setState( newState )
			
			//this.setState({ isOpen: true })
			//this.setState({ content: openContent(this.state.cardContent) })
		}
	}

	componentWillMount() {
		let newState = this.state
		newState.isOpen = false
		newState.content.head = <HeaderText  key="header__key__1" content={this.state.cardContent.header} />
		newState.content.body = <BodyContent key="body__key__1" content={this.state.cardContent.body} />
		this.setState( newState )
	
		//this.setState({ content: closedContent(this.state.cardContent) })
	}

	render(){
		return (
			<Card>
				{this.state.content.head}
				{this.state.isOpen ? this.state.content.body : null }
				<ShowMore handleClick = {this.toggleOpen} />
			</Card>
		)
	}

}
/*
HeaderText.propTypes = {

}*/


/*

<ReactCSSTransitionGroup
	//transitionName="example"
	//transitionName={ styles }
	transitionName = {{
		enter: styles.enter,
		enterActive: styles.enterActive,
		leave: styles.leave,
		leaveActive: styles.leaveActive,
		appear: styles.appear,
		appearActive: styles.appearActive
	}}
	transitionAppear={true}
	transitionAppearTimeout={2000}
	transitionEnter={true}
	transitionEnterTimeout={2000}
	transitionLeave={true}
	transitionLeaveTimeout={2000}
>
	<div className={styles.bodyContentContainer} >
		{this.state.content}
	</div>
	
</ReactCSSTransitionGroup>

*/