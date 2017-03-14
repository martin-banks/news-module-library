import React from 'react'
import {sampleText} from '../../sampleContent/text'
/* styles */
import style from '../../App.css'

/* UI elements */
import PreviewContainer from '../viewModules/PreviewContainer'

/* modules */
import Timeline_Card from '../../modules/molecules/Timeline_card'




const bodyContent = [
	{
		type: 'Smallhead',
		content: 'Card kicker'
	},
	{
		type: 'Image_Shadow',
		imagePath: 'https://unsplash.it/200/300/?random'
	},
	{
		type: 'Image_Shadow',
		imagePath: 'https://unsplash.it/200/300/?random'
	},
	{
		type: 'Smallhead',
		content: 'Card title'
	},
	{
		type: 'BodyText',
		content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil facilis cumque assumenda.'
	}
]


export default class Molecule_TimelineCard extends React.Component{
	constructor(props){
		super(props)	
		this.createPreviews = this.createPreviews.bind(this)
		this.state = {
			modules: {
				"Body Text": <Timeline_Card content={bodyContent}/>
			}
			
		}
	}

	createPreviews(){
		return Object.keys(this.state.modules)
			.map( module => <PreviewContainer
				key={'preview-' + module}
				type={module}
				component={this.state.modules[module]}
			/>
		)
	}

	render(){
		return (
			<section className={style.moduleTextView}>
				{this.createPreviews()}
			</section>
		)
	}

}

