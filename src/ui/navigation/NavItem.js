import React from 'react'

export default class NavItem extends React.Component{
	render(){
		return <li
			data-group={this.props.group}
			data-view={this.props.view}  
			onClick={this.props.handleClick}
		>
			{this.props.view}
		</li>
	}
}