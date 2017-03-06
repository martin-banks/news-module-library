import React from 'react'

export default class Navigation extends React.Component {
	constructor(props){
		super(props)
	}

	render(){
		return (
			<section id="navigationContainer">
				<div className="navGroupsContainer">
					<ul className="nav-primaryGroup atoms" >
						<li data-active='true'>Text</li>
						<li>Icons</li>
						<li>Logos</li>
						<li>Colors</li>
						<li>Fonts</li>
					</ul>
				</div>
			</section>
		)
	}
}