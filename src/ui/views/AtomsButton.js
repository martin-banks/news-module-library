import React from 'react'
import {sampleText} from '../../sampleContent/text'

import ButtonStart from '../../modules/atoms/buttons/Start'

import PreviewContainer from '../viewModules/PreviewContainer'


const components = {
	ButtonStart: <ButtonStart text='My test button'/>,
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
			<section id="atomButtonView">
				{this.createPreviews()}
			</section>
		)
	}

}

