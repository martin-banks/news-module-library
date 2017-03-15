import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import {sampleText} from '../../sampleContent/text'

import styles from './HeaderText.css'

import Crosshead from '../../modules/atoms/text/Crosshead'
import BodyText from '../../modules/atoms/text/BodyText'
import BodySerif from '../../modules/atoms/text/BodySerif'
import BodySans from '../../modules/atoms/text/BodySans'
import Smallhead from '../../modules/atoms/text/Smallhead'
import ListText from '../../modules/atoms/text/ListText'



const supportedBlocks = {
	BodyText: (p,i) => <BodyText key={`key__${i}`} text={p.content} style={p.style} />,
	Crosshead: (p,i) =>  <Crosshead key={`key__${i}`} text={p.content}/>,	
	SmallHead: (p,i) => <Smallhead key={`key__${i}`} text={p.content}/>,
	ListText: (p,i) => <ListText key={`key__${i}`} type={p.style} items={p.content} />
}


export default class BodyContent extends React.Component {
	constructor(props) {
		super(props)
		this.processContent = this.processContent.bind(this)
		//this.addContent = this.addContent.bind(this)
		this.state = { 
			content: [
				
			]
		}
	}


	processContent(){
		if(!!this.props.content){
			return this.props.content.map( (block,i) => {
				return supportedBlocks[block.type](block,i)
			})
		} else { 
			return null
		}

		
	}

	componentWillMount() {
		this.setState({content: this.processContent()})
	}

	/*componentWillUpdate() {
		this.setState({content: this.processContent() })
	}*/

	render(){
		return (
			<ReactCSSTransitionGroup
				component='div'
				//transitionName="example"
				//transitionName={ styles }
				transitionName = {{
					enter: styles.enter,
					enterActive: styles.enterActive,
					leave: styles.leave,
					leaveActive: styles.leaveActive,
					appear: styles.appear,
					appearActive: styles.appearActive
				}}
				transitionAppear={true}
				transitionAppearTimeout={500}
				transitionEnter={true}
				transitionEnterTimeout={500}
				transitionLeave={true}
				transitionLeaveTimeout={1000}
			>
				<div className={styles.bodyContentContainer} >
					{this.state.content}
				</div>
				
			</ReactCSSTransitionGroup>
		)
	}

}


BodyContent.propTypes = {
	content: React.PropTypes.array.isRequired,
	//show: React.PropTypes.boolean
}


/* EXAMPLE OF CONTENT ARRAY
content: [
	{
		type: 'BodyText',
		content: 'Lorem ipsum etc ...'
	},
	{
		type: 'Crosshead',
		content: 'Lorem ipsum etc ...'
	},
	{
		type: 'BodyText',
		content: 'Lorem ipsum etc ...'
	},
	{
		type: 'ListText',
		style: 'number',
		content: [
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
		]
	}
]
		
*/