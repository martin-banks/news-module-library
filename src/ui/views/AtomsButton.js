import React from 'react'
import {sampleText} from '../../sampleContent/text'

import ButtonStart from '../../modules/atoms/buttons/Start'
import ButtonRoundIcon from '../../modules/atoms/buttons/RoundIcon'
import ButtonSquareText from '../../modules/atoms/buttons/SquareText'

import PreviewContainer from '../viewModules/PreviewContainer'
import style from '../../App.css'

const components = {
	ButtonStart: <ButtonStart text='My test button'/>,
	roundButton: <ButtonRoundIcon />,
	textButton: <ButtonSquareText />
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

