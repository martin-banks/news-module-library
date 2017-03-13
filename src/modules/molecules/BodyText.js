import React from 'react'
import {sampleText} from '../../sampleContent/text'

import styles from './HeaderText.css'

import Crosshead from '../../modules/atoms/text/Crosshead'
import BodyText from '../../modules/atoms/text/BodyText'
import BodySerif from '../../modules/atoms/text/BodySerif'
import BodySans from '../../modules/atoms/text/BodySans'
import Smallhead from '../../modules/atoms/text/Smallhead'
import ListText from '../../modules/atoms/text/ListText'


export default class BodyContent extends React.Component {
	constructor(props) {
		super(props)
		
	}

	render(){
		return (
			<div
				className={styles.headerTextContainer}
			>
				<BodyText text={sampleText.paragraph} style='bodyTextSerif' />
				<Smallhead text={sampleText.crosshead}/>
				<ListText type='number' items={sampleText.list} style='bodyTextSerif' />
				<BodyText text={sampleText.paragraph} style='bodyTextSerif' />
				<Crosshead text={sampleText.crosshead}/>	
				<BodyText text={sampleText.paragraph} style='bodyTextSerif' />
			</div>
		)
	}

}
/*
HeaderText.propTypes = {

}*/