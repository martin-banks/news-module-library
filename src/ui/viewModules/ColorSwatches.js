import React from 'react'
import style from '../../App.css'

export default class ColorSwatch extends React.Component {
	render(){
		return (
			<li className={style.colorSwatch}>
				<div 
					className={style.colorSample}
					style={{
						background: this.props.colorValue,
						height: '100px',
						width: '100px',
						borderRadius: '100%'
					}}
				/>
				<h4>
					{this.props.colorName}
				</h4>
				<div className={style.colorValue}>
					{this.props.colorValue}
				</div>
			</li>
		)
	}
}