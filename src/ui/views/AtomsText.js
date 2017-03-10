import React from 'react'
import {sampleText} from '../../sampleContent/text'
/* styles */
import style from '../../App.css'

/* UI elements */
import PreviewContainer from '../viewModules/PreviewContainer'

/* modules */
import Title from '../../modules/atoms/text/Title'
import Intro from '../../modules/atoms/text/Intro'
import Kicker from '../../modules/atoms/text/Kicker'
import Crosshead from '../../modules/atoms/text/Crosshead'
import BodyText from '../../modules/atoms/text/BodyText'
import BodySerif from '../../modules/atoms/text/BodySerif'
import BodySans from '../../modules/atoms/text/BodySans'
import Smallhead from '../../modules/atoms/text/Smallhead'
import ListText from '../../modules/atoms/text/ListText'




export default class AtomsText extends React.Component{
	constructor(props){
		super(props)	
		this.createPreviews = this.createPreviews.bind(this)
		this.state = {
			atoms: {
				kicker: <Kicker text={sampleText.kicker}/>,
				title: <Title text={sampleText.title}/>,
				intro: <Intro text={sampleText.intro}/>,
				crosshead: <Crosshead text={sampleText.crosshead}/>,
				smallhead: <Smallhead text={sampleText.crosshead}/>,
				"Body text": <BodyText text={sampleText.paragraph} style='bodyTextSerif' />,
				"Text List": <ListText type='number' items={sampleText.list} style='bodyTextSerif' />,
				/*"Body serif": <BodySerif text={sampleText.paragraph}/>,*/
				/*"Body sans": <BodySans text={sampleText.paragraph}/>*/
			}
			
		}
	}

	createPreviews(){
		return Object.keys(this.state.atoms)
			.map( atom => <PreviewContainer
				key={'preview-' + atom}
				type={atom}
				component={this.state.atoms[atom]}
			text="some text"/>
		)
	}

	render(){
		return (
			<section className={style.atomTextView}>
				{this.createPreviews()}
			</section>
		)
	}

}

