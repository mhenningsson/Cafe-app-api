import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class CategoryIndex extends React.Component {
	state = {
		list: [],
	}

	componentDidMount() {
		axios.get("http://localhost:3001/api/categories")
		.then(response => {
			this.setState({
				list: response.data.data.categories
			})
		})
		.catch(error => {
			console.error(error)
		})
	}

	render() {
		const items = this.state.list.map((item, index) => {
			return (
				<p className="listitem" key={index}>
					<Link to={'/categories/' + item.id}>{item.name}</Link>
				</p>
			)
		})

		return (
				<div>
					<h1>Lista över kategorier:</h1>
					{items}
				</div>
		)
	}
}

export default CategoryIndex;