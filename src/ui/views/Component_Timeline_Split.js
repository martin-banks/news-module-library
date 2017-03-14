import React from 'react'
import {sampleText} from '../../sampleContent/text'
/* styles */
import style from '../../App.css'

/* UI elements */
import PreviewContainer from '../viewModules/PreviewContainer'

/* modules */
import Timeline_Split from '../../modules/components/Timeline_Split'




export default class Component_Timeline_Split extends React.Component{
	constructor(props){
		super(props)	
		this.createPreviews = this.createPreviews.bind(this)
		this.state = {
			modules: {
				"Timeline - split": <Timeline_Split />
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

