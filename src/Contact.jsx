import React, { Component } from 'react';
import './style/Contact.css';
import { Form, Spinner } from 'react-bootstrap';
import { Spring } from 'react-spring/renderprops';
import Icons from './Icons';

export default class Contact extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			email: '',
			comments: '',
			clickedSend: false,
			showSuccess: false,
			showFailure: false
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
		if (
			this.state.name !== '' &&
			this.state.email.includes('@') &&
			this.state.email.includes('.') &&
			this.state.comments !== ''
		) {
			this.setState({
				clickedSend: true
			});

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
			}).then((res) => {
				if (res.status === 200) {
					this.setState({
						showSuccess: true
					});
				} else {
					this.setState({
						showFailure: true
					});
				}
			});
		} else {
			return alert('Hey, you should really double-check all fields are filled correctly. :-)');
		}
	};
	render() {
		if (this.props.page === 'Contact') {
			return (
				<Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
					{(props) => (
						<div style={props}>
							<Form id="Contact" onSubmit={this.handleSubmit}>
								<Form.Group controlId="name">
									<Form.Label>Name</Form.Label>
									<Form.Control
										type="text"
										placeholder="Your Name"
										onChange={this.handleNameChange}
									/>
								</Form.Group>
								<Form.Group controlId="email">
									<Form.Label>Email address</Form.Label>
									<Form.Control
										type="email"
										placeholder="name@example.com"
										onChange={this.handleEmailChange}
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
									/>
								</Form.Group>
								{!this.state.clickedSend ? (
									<button id="contact-submit" type="submit" onClick={this.sendEmail}>
										<b>SUBMIT</b>
									</button>
								) : !this.state.showSuccess && !this.state.showFailure ? (
									<Spinner id="contact-spinner" animation="border" variant="warning" />
								) : null}
								{this.state.showSuccess ? (
									<p id="success">
										Your message has been sent. Please check your inbox for confirmation.
									</p>
								) : null}
								{this.state.showFailure ? (
									<p id="failure">
										There has been an error. Please, try again or send me a message directly at
										gcsaperas@gmail.com...
									</p>
								) : null}
							</Form>
							{this.props.windowHeight > 568 ? <Icons id="contact-icons" /> : null}
						</div>
					)}
				</Spring>
			);
		} else {
			return null;
		}
	}
}
