import React from 'react'
import {sampleText} from '../../sampleContent/text'

import styles from '../molecules/HeaderText.css'

import Card from '../atoms/containers/Card'
import ShowMore from '../atoms/buttons/ShowMore'
import BodyContent from '../molecules/BodyText'
import HeaderText from '../molecules/HeaderText'


const openContent = [
	<HeaderText />,
	<BodyContent />
]

const closedContent = [
	<HeaderText />
]


export default class CardSimple extends React.Component {
	constructor(props) {
		super(props)
		this.toggleOpen = this.toggleOpen.bind(this)

		this.state = {
			isOpen: false,
			content: [
				<HeaderText />
			]
		}
	}

	toggleOpen(update){
		if(this.state.isOpen){
			/*let update = this.state
			update.isOpen = false
			update.content = closedContent*/
			this.setState({ isOpen: false })
			this.setState({ content: closedContent })
		} else {
			this.setState({ isOpen: true })
			this.setState({ content: openContent })
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