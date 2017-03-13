import React from 'react'
import {sampleText} from '../../sampleContent/text'

import ButtonRoundIcon from '../../modules/atoms/buttons/RoundIcon'
import ButtonSquareText from '../../modules/atoms/buttons/SquareText'
import ButtonPill from '../../modules/atoms/buttons/Pill'
import ButtonShowMore from '../../modules/atoms/buttons/ShowMore'

import PreviewContainer from '../viewModules/PreviewContainer'
import style from '../../App.css'

const components = {
	"Round with icon": <ButtonRoundIcon />,
	"Text with icon": <ButtonSquareText />,
	"Pill text and icon": <ButtonPill />,
	"Show more / less toggle": <ButtonShowMore />
}

export default class AtomsButton extends React.Component{
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
			<section className={style.atomButtonView}>
				{this.createPreviews()}
			</section>
		)
	}

}

