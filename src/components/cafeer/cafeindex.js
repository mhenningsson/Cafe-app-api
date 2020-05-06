import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class CafeIndex extends React.Component {
	state = {
		list: [],
		error: false,
	}

	componentDidMount() {
		axios.get("http://localhost:3001/api/cafeer")
		.then(response => {
			if (response.data.status !== "success") {
				this.setState({
					error: response.data.message || 'Unknown error occurred.',
				});
				return;
			}

			this.setState({
				list: response.data.data.cafeer,
				error: false,
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
					<Link to={'/cafeer/' + item.id}>{item.name} ({item.adress}, {item.city})</Link>
				</p>
			)
		})

		return (
				<div>
					<h1>Lista över caféer:</h1>
					{items}
				</div>
		)
	}
}

export default CafeIndex