import React from 'react'
import {sampleText} from '../../sampleContent/text'

import Title from '../../modules/atoms/text/Title'
import Intro from '../../modules/atoms/text/Intro'
import Kicker from '../../modules/atoms/text/Kicker'
import Crosshead from '../../modules/atoms/text/Crosshead'
import BodySerif from '../../modules/atoms/text/BodySerif'
import BodySans from '../../modules/atoms/text/BodySans'
import Smallhead from '../../modules/atoms/text/Smallhead'

let allModules = [
	Title,
	Intro,
	Kicker
]


export default class AtomsText extends React.Component{
	constructor(props){
		super(props)
		
	}



	render(){
		return (
			<section>
				<div className="elementContainer">
					<h4 className="elementName">Kicker</h4>
					<Kicker text={sampleText.kicker}/>
				</div>

				<div className="elementContainer">
					<h4 className="elementName">Title</h4>
					<Title text={sampleText.title}/>
				</div>

				<div className="elementContainer">
					<h4 className="elementName">Introduction</h4>
					<Intro text={sampleText.intro}/>
				</div>

				<div className="elementContainer">
					<h4 className="elementName">Crosshead</h4>
					<Crosshead text={sampleText.crosshead}/>
				</div>

				<div className="elementContainer">
					<h4 className="elementName">Smallhead</h4>
					<Smallhead text={sampleText.crosshead}/>
				</div>

				<div className="elementContainer">
					<h4 className="elementName">Body - serif</h4>
					<BodySerif text={sampleText.paragraph}/>
				</div>

				<div className="elementContainer">
					<h4 className="elementName">Body - sans-serif</h4>
					<BodySans text={sampleText.paragraph}/>
				</div>

			</section>
		)
	}

}

