import React from 'react';
import './style/Navbar.css';
import { Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function NavigationBar(props) {
	return (
		<div>
			<Navbar id="navbar" variant="custom" expand="md">
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ml-auto">
						<Router>
							<Nav.Link className="nav-link" onClick={props.toHome}>
								Home
							</Nav.Link>
							<Nav.Link className="nav-link" onClick={props.toPortfolio}>
								Portfolio
							</Nav.Link>
							<Nav.Link to="/contact" className="nav-link" onClick={props.toContact}>
								Contact
							</Nav.Link>
						</Router>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
}

export default NavigationBar;
