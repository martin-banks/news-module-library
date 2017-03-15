import React from 'react'
import PreviewContainer from '../viewModules/PreviewContainer'
import style from '../../App.css'

import Image_translucentShadow from '../../modules/atoms/images/Image_translucentShadow'
import Image_Shadow from '../../modules/atoms/images/Image_Shadow'

const imagePath = 'https://unsplash.it/300/300/?random'

const components = {
	"Translucent shadow": <Image_translucentShadow imagePath = {imagePath} />,
	"Shadow": <Image_Shadow imagePath = {imagePath} />
}


export default class AtomsImage extends React.Component {
	constructor(props) {
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
		return <section className = {style.atomImageView} >
			{this.createPreviews()}
		</section>
	}


}