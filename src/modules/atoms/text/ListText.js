import React from 'react'
import styles from './text.css'

export default class ListText extends React.Component{
	constructor(props) {
		super(props)
		this.concatStyles = this.concatStyles.bind(this)
		this.listType = this.listType.bind(this)
		this.listItems = this.listItems.bind(this)
	}

	concatStyles(){
		let styleToCheck = styles[this.props.style]
		if(!!styleToCheck){
			return styleToCheck
		} else {
			return styles.bodyTextSerif
		}
	}

	listType(items){
		if(this.props.type === 'number'){
			return <ol className={styles.listNumber}>
				{items}
			</ol>
		} else {
			return <ul className={styles.listBullet}>
				{items}
			</ul>
		}
	}

	listItems(){
		return this.props.items.map((item,i) => {
			return <li key={this.props.type + '-list-'+i} >{item}</li>
		})
	}

	render(){
		return <div>{ this.listType(this.listItems()) }</div>
	}

}


ListText.propTypes = {
	items: React.PropTypes.array.isRequired,
	type: React.PropTypes.string.isRequired
}