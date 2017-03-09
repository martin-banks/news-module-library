import React from 'react'
import {sampleText} from '../../sampleContent/text'

import Title from '../../modules/atoms/text/Title'
import Intro from '../../modules/atoms/text/Intro'
import Kicker from '../../modules/atoms/text/Kicker'
import Crosshead from '../../modules/atoms/text/Crosshead'
import BodySerif from '../../modules/atoms/text/BodySerif'
import BodySans from '../../modules/atoms/text/BodySans'
import Smallhead from '../../modules/atoms/text/Smallhead'
import PreviewContainer from '../viewModules/PreviewContainer'


const components = {
	kicker: <Kicker text={sampleText.kicker}/>,
	title: <Title text={sampleText.title}/>,
	intro: <Intro text={sampleText.intro}/>,
	crosshead: <Crosshead text={sampleText.crosshead}/>,
	smallhead: <Smallhead text={sampleText.crosshead}/>,
	bodySerif: <BodySerif text={sampleText.paragraph}/>,
	bodySans: <BodySans text={sampleText.paragraph}/>
}

export default class AtomsText extends React.Component{
	constructor(props){
		super(props)	
		this.createPreviews = this.createPreviews.bind(this)
	}



	createPreviews(){
		return Object.keys(components)
			.map( component => <PreviewContainer
				key={'preview-' + component}
				type={component}
				component={components[component]}
			text="some text"/>
		)
	}

	render(){
		return (
			<section id="atomTextView">
				{this.createPreviews()}
			</section>
		)
	}

}

