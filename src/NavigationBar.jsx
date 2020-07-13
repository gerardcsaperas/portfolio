import React from 'react';
import './style/Navbar.css';
import { Navbar, Nav } from 'react-bootstrap';

import { Spring } from 'react-spring/renderprops';

function NavigationBar(props) {
	return (
		<Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
			{(style) => (
				<div style={style}>
					<Navbar id="navbar" variant="custom" expand="md">
						<Navbar.Toggle aria-controls="basic-navbar-nav" />
						<Navbar.Collapse id="basic-navbar-nav">
							<Nav className="ml-auto">
								<Nav.Link className="nav-link" onClick={props.toHome}>
									Home
								</Nav.Link>
								<Nav.Link className="nav-link" onClick={props.toPortfolio}>
									Portfolio
								</Nav.Link>
								<Nav.Link to="/contact" className="nav-link" onClick={props.toContact}>
									Contact
								</Nav.Link>
							</Nav>
						</Navbar.Collapse>
					</Navbar>
				</div>
			)}
		</Spring>
	);
}

export default NavigationBar;
