import React from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'

class OwnerShow extends React.Component {
	constructor(props) {
		super(props);
			this.ownerId = this.props.match.params.id;
	}

	state = {
		owner: false,
		cafeer: false
	}

	componentDidMount() {
		axios.get(`http://localhost:3001/api/owners/${this.ownerId}`)
		.then(response => {
			this.setState({
				owner: response.data.data.owner,
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
				{this.state.owner ? (
					<div>
						<h1>{this.state.owner.first_name} {this.state.owner.last_name}</h1>
							<h3>{this.state.owner.email ? 
								`Email: ${this.state.owner.email}` : 
								'Saknar emailadress.'}
							</h3>
							<h3>{this.state.owner.phone ? 
								`Telefon: ${this.state.owner.phone}` : 
								'Saknar telefonnummer.'}
							</h3>

							<hr />

							<h2>Caféer:</h2>
							{this.state.cafeer.length > 0 ? (
								<p>{this.state.cafeer.map(cafe => cafe.name).join(', ')}</p>
							) : (
								<p>Ägaren saknar caféer.</p>
							)}
					</div>
				) : (
					<h1>Loading...</h1>
				)}

				<Link to="/owners"><button className="backindex">Tillbaka</button></Link>
			</div>
		)
	}
}

export default OwnerShow;