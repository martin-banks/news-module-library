import React from 'react'

import Kicker from '../atoms/text/Kicker'
import Title from '../atoms/text/Title'
import Intro from '../atoms/text/Intro'
import styles from './HeaderText.css'


export default class HeaderText extends React.Component {
	constructor(props) {
		super(props)
		
	}

	render(){
		return (
			<div
				className={styles.headerTextContainer}
			>
				<Kicker text='Kicker text' />
				<Title text = 'Title text' />
				<Intro text='Introduction text' />
					
			</div>
		)
	}

}
/*
HeaderText.propTypes = {

}*/