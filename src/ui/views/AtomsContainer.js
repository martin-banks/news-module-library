import React from 'react'
//import {sampleText} from '../../sampleContent/text'
import style from '../../App.css'
import PreviewContainer from '../viewModules/PreviewContainer'

import ContainerCard from '../../modules/atoms/containers/Card'



export default class AtomsContainer extends React.Component{
	constructor(props){
		super(props)	
		this.createPreviews = this.createPreviews.bind(this)
		this.state = { 
			components: {
				"Card": <ContainerCard content={['Content in here']} />
			}
		}
	}

	createPreviews(){
		return Object.keys(this.state.components)
			.map( atom => <PreviewContainer
				key={'preview-' + atom}
				type={atom}
				component={this.state.components[atom]}
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

