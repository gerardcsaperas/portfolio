import React from 'react';
import './style/Navbar.css';
import { Navbar, Nav } from 'react-bootstrap';

import { Spring } from 'react-spring/renderprops';

function NavigationBar(props) {
	return (
		<Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
			{(style) => (
				<div style={style}>
					<Navbar id="navbar" variant="custom" expand>
						{/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
						<Navbar.Collapse id="basic-navbar-nav"> */}
						<Nav id="linkedin-and-resume-links">
							<a
								id="linkedin"
								className="nav-link"
								href="https://www.linkedin.com/in/gerardcastrelosaperas/"
								target="_blank"
							>
								<i className="fa fa-linkedin-square" aria-hidden="true" />
							</a>
							<a
								id="resume"
								className="nav-link"
								href="https://docs.google.com/document/d/1sXYBPUNgvFXUeRgK5i896jiE_jqV8AGOzcUX8rzyucI/edit?usp=sharing"
								target="_blank"
							>
								<img src={require('./assets/icons/icons8-download-resume-80.png')} />
							</a>
						</Nav>
						<Nav>
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
						{/* </Navbar.Collapse> */}
					</Navbar>
				</div>
			)}
		</Spring>
	);
}

export default NavigationBar;
