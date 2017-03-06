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
					<div className="previewWrapper">
						<Kicker text={sampleText.kicker}/>
					</div>
				</div>

				<div className="elementContainer">
					<h4 className="elementName">Title</h4>
					<div className="previewWrapper">
						<Title text={sampleText.title}/>
					</div>
				</div>

				<div className="elementContainer">
					<h4 className="elementName">Introduction</h4>
					<div className="previewWrapper">
						<Intro text={sampleText.intro}/>
					</div>
				</div>

				<div className="elementContainer">
					<h4 className="elementName">Crosshead</h4>
					<div className="previewWrapper">
						<Crosshead text={sampleText.crosshead}/>
					</div>
				</div>

				<div className="elementContainer">
					<h4 className="elementName">Smallhead</h4>
					<div className="previewWrapper">
						<Smallhead text={sampleText.crosshead}/>
					</div>
				</div>

				<div className="elementContainer">
					<h4 className="elementName">Body - serif</h4>
					<div className="previewWrapper">
						<BodySerif text={sampleText.paragraph}/>
					</div>
				</div>

				<div className="elementContainer">
					<h4 className="elementName">Body - sans-serif</h4>
					<div className="previewWrapper">
						<BodySans text={sampleText.paragraph}/>
					</div>
				</div>

			</section>
		)
	}

}

