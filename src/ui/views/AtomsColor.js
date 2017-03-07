import React from 'react'
import ColorSwatch from '../viewModules/ColorSwatches'
import {colors} from '../../modules/atoms/colors/_values.js'


export default class AtomsColor extends React.Component {
	constructor(props){
		super(props)
		this.createSwatches = this.createSwatches.bind(this)
	}

	createSwatches(){
		let colorNames = Object.keys(colors)
		return colorNames.map( colorName => {
			let colorTints = Object.keys(colors[colorName])
			let swatches = colorTints.map( colorTint => {
				return <ColorSwatch 
					key={'color-' + colorName + colorTint}
					colorName={colorName + '-' + colorTint}
					colorValue={colors[colorName][colorTint]}
				/>
			})
			return (
				<div 
					key={'swatchGroup' + colorName} 
					className="elementContainer"
				>
					<h4 className="elementName">
						{colorName}
					</h4>
					<ul className='previewWrapper'>{swatches}</ul>
				</div>
			)

		})
	}

	render(){
		return (
			<div id='atomColorView'>
				{this.createSwatches()}
			</div>
		)
	}
}