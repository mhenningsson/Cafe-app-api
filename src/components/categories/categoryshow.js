import React from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'

class CategoryShow extends React.Component {
	constructor(props) {
		super(props);
			this.categoryId = this.props.match.params.id;
	}

	state = {
		category: false,
		cafeer: false
	}

	componentDidMount() {
		axios.get(`http://localhost:3001/api/categories/${this.categoryId}`)
		.then(response => {
			this.setState({
				category: response.data.data.category,
				cafeer: response.data.data.cafeer
			})
		})
		.catch(error => {
			console.error(error)
		})
	}

	render() {
		return (
			<div>
				{this.state.category ? (
					<div>
						<h1>{this.state.category[0].name}</h1>

							<hr />

							<h2>Caféer:</h2>
							{this.state.cafeer.length > 0 ? (
								<p>{this.state.cafeer.map(cafe => cafe.name).join(', ')}</p>
							) : (
								<p>Kategorien saknar caféer.</p>
							)}
					</div>
				) : (
					<h1>Loading...</h1>
				)}

				<Link to="/categories"><button className="backindex">Tillbaka</button></Link>
			</div>
		)
	}
}

export default CategoryShow;