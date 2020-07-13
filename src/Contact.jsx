import React, { Component } from 'react';
import './style/Contact.css';
import { Form } from 'react-bootstrap';
import { Spring } from 'react-spring/renderprops';

export default class Contact extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			email: '',
			comments: ''
		};
	}
	handleCommentsChange = (e) => {
		let comments = e.target.value;

		this.setState({
			comments: comments
		});
	};
	handleEmailChange = (e) => {
		let email = e.target.value;

		this.setState({
			email: email
		});
	};
	handleNameChange = (e) => {
		let name = e.target.value;

		this.setState({
			name: name
		});
	};
	handleSubmit = (e) => {
		e.preventDefault();
		console.log(e);
	};
	sendEmail = () => {
		fetch('/send-email', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				name: this.state.name,
				email: this.state.email,
				comments: this.state.comments
			})
		});
	};
	render() {
		if (this.props.page === 'Contact') {
			return (
				<Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
					{(props) => (
						<Form style={props} id="Contact" onSubmit={this.handleSubmit}>
							<Form.Group controlId="name">
								<Form.Label>Name</Form.Label>
								<Form.Control
									type="text"
									placeholder="Your Name"
									onChange={this.handleNameChange}
									required
								/>
							</Form.Group>
							<Form.Group controlId="email">
								<Form.Label>Email address</Form.Label>
								<Form.Control
									type="email"
									placeholder="name@example.com"
									onChange={this.handleEmailChange}
									required
								/>
								<Form.Text muted>I won't share it with anyone else.</Form.Text>
							</Form.Group>
							<Form.Group controlId="exampleForm.ControlTextarea1">
								<Form.Label>Comments</Form.Label>
								<Form.Control
									as="textarea"
									rows="3"
									placeholder="Write as much as you need about yourself, your company, your project..."
									onChange={this.handleCommentsChange}
									required
								/>
							</Form.Group>
							<button id="contact-submit" type="submit" onClick={this.sendEmail}>
								<b>SUBMIT</b>
							</button>
						</Form>
					)}
				</Spring>
			);
		} else {
			return null;
		}
	}
}
