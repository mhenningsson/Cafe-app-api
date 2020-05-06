import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class CafeEdit extends React.Component {
	state = {
		id: '',
		name: '',
		adress: '',
		city: ''
	}
	
	componentDidMount = () => {
		axios.get(`http://localhost:3001/api/cafeer/${this.props.match.params.id}`)
		.then(response => {
			const cafe = response.data.data.cafe

			this.setState({
				id: cafe.id,
				name: cafe.name,
				adress: cafe.adress,
				city: cafe.city
			})
		})
		.catch(err => {
			console.error(err)
		})
	}

	editCafe = (cafe) => {
		axios({
			method: 'put',
			url: `http://localhost:3001/api/cafeer/${this.state.id}`,
			data: cafe,
			headers: {'Content-type': 'application/json'}
		})
		.then(response => {
			this.props.history.push("/cafeer/" + response.data.data.cafe.id)
		})
		.catch(err => {
			console.error(err)
		})
	}

	handleChange =(e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	handleDelete = (e) => {
		e.preventDefault()

		axios.delete( `http://localhost:3001/api/cafeer/${this.state.id}`, {data: this.state})
		.then(response => {
			this.props.history.push("/")
		})
		.catch(err => {
			console.error(err)
		})
	}

	handleSubmit = (e) => {
		e.preventDefault();

		const cafe = {
			name: this.state.name,
			adress: this.state.adress,
			city: this.state.city
		}

		this.editCafe(cafe)
	}


	render() {
		return (
			<div className="container">
				<h1>Redigera café</h1>

				<form action="/cafeer" method="post" onSubmit={this.handleSubmit} >
					<label htmlFor="name">Namn</label>
					<input className="form-control" type="text" name="name" id="name" onChange={this.handleChange} value={this.state.name} />

					<label htmlFor="adress">Adress</label>
					<input className="form-control" type="text" name="adress" id="adress" onChange={this.handleChange} value={this.state.adress} />

					<label htmlFor="city">Ort</label>
					<input className="form-control" type="text" name="city" id="city" onChange={this.handleChange} value={this.state.city} />

					<div className="button-group">
						<button type="submit" className="createbutton">Ändra</button>

						<Link to={'/cafeer/' + this.state.id}><button className="backindex">Tillbaka</button></Link>
					</div>

					<button className="deletebutton" onClick={this.handleDelete}>Radera</button>
				</form>
		</div>
		)
	}
}

export default CafeEdit;