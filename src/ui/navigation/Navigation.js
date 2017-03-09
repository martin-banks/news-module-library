import React from 'react'
import NavItem from './_NavItem'
import atomLogo from '../icons/icons_atom.svg'
import moleculeLogo from '../icons/icons_molecule.svg'
import {navOptions} from './_navOptions'
import navStyle from '../../App.css'


const initialNavIcon = ()=> {
	return Object.keys(navOptions).reduce( (set, option) => {
		set[option] = 'expand_more'
		return set
	}, {})
}


export default class Navigation extends React.Component {
	constructor(props){
		super(props)
		this.createItems = this.createItems.bind(this)
		this.checkActiveNav = this.checkActiveNav.bind(this)
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

		this.setState({activeNav: activeNav})
		this.setState({ navIcons: updatedIcons })
	}


	checkActiveNav(viewToCheck){
		if(!!this.state.activeNav.page){
			return this.state.activeNav.page.toLowerCase() === viewToCheck.toLowerCase()
		}
	}

	createGroupItems(group, activeGroup){ 
		if(activeGroup === group){
			return navOptions[group].map( (nav,i) => {
				return <NavItem 
					key={group + nav + i}
					group={group} 
					view={nav} 
					handleClick={this.props.changeView}
					isActive={this.checkActiveNav(nav)}
				/>
			})
		} else {
			return ''
		}
		
	}

	createItems(){
		return Object.keys(navOptions).map(group => {
			return (
				<div key={ group }>
					<li 
						className={navStyle.navGroupHeader}
						onClick={this.setActiveNav}
						data-group={group} 
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