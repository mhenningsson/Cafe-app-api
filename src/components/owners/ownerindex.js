import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class OwnerIndex extends React.Component {
	state = {
		list: [],
	}

	componentDidMount() {
		axios.get("http://localhost:3001/api/owners")
		.then(response => {
			this.setState({
				list: response.data.data.owners
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
					<Link to={'/owners/' + item.id}>{item.first_name} {item.last_name}</Link>
				</p>
			)
		})

		return (
				<div>
					<h1>Lista över ägare:</h1>
					{items}
				</div>
		)
	}
}

export default OwnerIndex;