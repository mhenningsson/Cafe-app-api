import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class CafeShow extends React.Component {
	constructor(props) {
		super(props);
			this.cafeId = this.props.match.params.id;
	}

	state = {
		cafe: false,
		error: false,
	}

	componentDidMount() {
		axios.get(`http://localhost:3001/api/cafeer/${this.cafeId}`)
		.then(response => {
			if (response.data.status !== "success") {
				this.setState({
					error: response.data.message || 'Unknown error occurred.',
				});
				return;
			}

			this.setState({
				cafe: response.data.data.cafe,
				error: false,
			})
		})
		.catch(error => {
			console.error(error)
		})
	}

	render() {
		return (
			<div>
				{this.state.cafe ? (
					<div>
						<h1>{this.state.cafe.name}:</h1>
							<h2>{this.state.cafe.adress ? 
								`${this.state.cafe.adress}, ${this.state.cafe.city}` : 
								`${this.state.cafe.ctiy}`}
							</h2>

							<hr />

							<h2>Ägare</h2>
							{this.state.cafe.owner ? (
								<p>{this.state.cafe.owner.first_name} {this.state.cafe.owner.last_name}</p>
							) : (
								<p>Caféet saknar ägare.</p>
							)}

							<hr />

							<h2>Kategorier</h2>
							{this.state.cafe.categories.length > 0 ? (
								<p>{this.state.cafe.categories.map(category => category.name).join(', ')}</p>
							) : (
								<p>Caféet saknar kategorier.</p>
							)}
					</div>
				) : (
					<h1>Loading...</h1>
				)}

				<div className="button-group">
					<Link to={'/cafeer/' + this.cafeId + '/edit'}><button className="backindex">Redigera</button></Link>
					<Link to="/"><button className="backindex">Tillbaka</button></Link>
				</div>
			</div>
		)
	}
}

export default CafeShow