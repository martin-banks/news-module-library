import React from 'react'
import NavItem from './_NavItem'
import atomLogo from '../icons/icons_atom.svg'
import moleculeLogo from '../icons/icons_molecule.svg'
import navStyle from '../../App.css'
import {viewController} from '../_viewController'

const initialNavIcon = ()=> {
	return Object.keys(viewController).reduce( (set, option) => {
		set[option] = 'expand_more'
		return set
	}, {})
}


export default class Navigation extends React.Component {
	constructor(props){
		super(props)
		this.createItems = this.createItems.bind(this)
		this.checkActiveNav = this.checkActiveNav.bind(this)
		this.checkActiveSection = this.checkActiveSection.bind(this)
		this.setActiveNav = this.setActiveNav.bind(this)
		this.createGroupItems = this.createGroupItems.bind(this)

		this.state = {
			navIcons: {},
			activeNav: {
				section: null,
				page: null
			}	
		}

	}/*end constructor*/

	componentWillMount() {
		this.setState({navIcons: initialNavIcon()})
	}


	setActiveNav(e){
		let group = e.target.getAttribute('data-group').toLowerCase()
		let page = !!e.target.getAttribute('data-view') ? e.target.getAttribute('data-view').toLowerCase() : null
		let activeNav = {
			section: group,
			page: page
		}
		let updatedIcons = initialNavIcon()
		updatedIcons[group] = 'expand_less'

		this.setState({ activeNav: activeNav })
		this.setState({ navIcons: updatedIcons })

		if (!!page){
			/* 
			if there is a page/view defined, call changeView function from main App
			This will trigger change of App state to render correct view
			*/
			this.props.changeView(e)
		}
	}


	checkActiveNav(viewToCheck){
		if(!!this.state.activeNav.page){
			return this.state.activeNav.page.toLowerCase() === viewToCheck.toLowerCase()
		}
	}
	checkActiveSection(sectionToCheck){
		if(!!this.state.activeNav.section){
			return this.state.activeNav.section.toLowerCase() === sectionToCheck.toLowerCase()
		}
	}


	createGroupItems(group, activeGroup){ 
		if(activeGroup === group){
			return Object.keys(viewController[group]).map( (component,i) => {
				return <NavItem 
					key={group + component + i}
					group={group} 
					view={component} 
					handleClick={this.setActiveNav}
					isActive={this.checkActiveNav(component)}
				/>
			})
		} else {
			return ''
		}
		
	}

	createItems(){
		return Object.keys(viewController).map(group => {
			return (
				<div key={ group }>
					<li 
						className={navStyle.navGroupHeader}
						onClick={this.setActiveNav}
						data-group={group}
						data-active={this.checkActiveSection(group)}
					>
						{group}<i className={navStyle.materialIcons}>{this.state.navIcons[group]}</i>
					</li>
					<ul>
						{ this.createGroupItems(group, this.state.activeNav.section) }
					</ul>
				</div>
			) 
		})
	}

	render(){
		return (
			<section className={navStyle.navigationContainer}>
				<div className={navStyle.navGroupsContainer}>
					<ul className={navStyle.navPrimaryGroup} >
						{this.createItems()}
					</ul>
				</div>
			</section>
		)
	}
}