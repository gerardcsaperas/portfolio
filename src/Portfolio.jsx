import React from 'react';
import { Card, CardColumns } from 'react-bootstrap';
export class Portfolio extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		if (this.props.page === 'Portfolio') {
			return (
				<CardColumns id="Portfolio">
					<Card>
						<Card.Img variant="top" src={require('./assets/images/react-js-drummachine.jpeg')} />
						<Card.Body>
							<Card.Title>Card title that wraps to a new line</Card.Title>
							<Card.Text>
								This is a longer card with supporting text below as a natural lead-in to additional
								content. This content is a little bit longer.
							</Card.Text>
						</Card.Body>
					</Card>
				</CardColumns>
			);
		} else {
			return null;
		}
	}
}

export default Portfolio;
