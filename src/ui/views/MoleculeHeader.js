import React from 'react'
import {sampleText} from '../../sampleContent/text'
/* styles */
import style from '../../App.css'

/* UI elements */
import PreviewContainer from '../viewModules/PreviewContainer'

/* modules */
import HeaderText from '../../modules/molecules/HeaderText'

const headerContent = [
	{
		type: 'Image_translucentShadow',
		imagePath: 'https://unsplash.it/200/300/?random',
	},
	{
		type: 'Kicker',
		content: 'Kicker'
	},
	{
		type: 'Title',
		content: 'This is my header title'
	},
	{
		type: 'Intro',
		content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore ea non quibusdam quo possimus molestias tempora tenetur repellat dignissimos quia vitae explicabo reiciendis, quisquam, rem, doloremque aliquid reprehenderit nam nobis!'
	}

]


export default class MoleculeHeaderText extends React.Component{
	constructor(props){
		super(props)	
		this.createPreviews = this.createPreviews.bind(this)
		this.state = {
			modules: {
				"Header Text": <HeaderText content={headerContent}/>
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

