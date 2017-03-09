import React from 'react'
import style from '../../App.css'

export default class PreviewContainer extends React.Component {

	render(){
		return (
			<div className={style.elementContainer}>
				<h4 className={style.elementName}>{this.props.type}</h4>
				<div className={style.previewWrapper}>
					{this.props.component}
				</div>
			</div>
		)
	}
}