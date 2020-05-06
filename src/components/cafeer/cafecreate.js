import React from 'react'
import axios from 'axios'

class CafeCreate extends React.Component {
	state = {
		name: '',
		adress: '',
		city: ''
	}

	createNewCafe = (cafe) => {
		axios({
			method: 'post',
			url: 'http://localhost:3001/api/cafeer',
			data: cafe,
			headers: {'Content-type': 'application/json'}
		})
		.then(response => {
			console.log(response)
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

	handleSubmit = (e) => {
		e.preventDefault();

		const cafe = {
			name: this.state.name,
			adress: this.state.adress,
			city: this.state.city
		}

		this.createNewCafe(cafe)
	}


	render() {
		return (
			<div className="container">
				<h1>Skapa ett nytt café</h1>

				<form action="/cafeer" method="post" onSubmit={this.handleSubmit} >
					<label htmlFor="name">Namn</label>
					<input className="form-control" type="text" name="name" id="name" onChange={this.handleChange} />

					<label htmlFor="adress">Adress</label>
					<input className="form-control" type="text" name="adress" id="adress" onChange={this.handleChange} />

					<label htmlFor="city">Ort</label>
					<input className="form-control" type="text" name="city" id="city" onChange={this.handleChange} />

					<button type="submit" className="createbutton">Skapa</button>
				</form>
		</div>
		)
	}
}

export default CafeCreate;