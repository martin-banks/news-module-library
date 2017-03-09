import React from 'react'
import style from '../../App.css'
export default class MissingView extends React.Component {
	render(){
		return (
			<div className={style.missingView}>
				<h1>{`The ${this.props.viewName} view isn't ready yet...`}</h1>
			</div>
		)
	}
}