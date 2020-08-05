import React from 'react';
import './style/Icons.css';
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Icons() {
	return (
		<Row id="icons" className="d-flex justify-content-around">
			<Row id="row1-icons" className="d-flex justify-content-around">
				<Col className="icon-col">
					<FontAwesomeIcon className="icon" id="git" icon={[ 'fab', 'git-alt' ]} />
				</Col>
				<Col className="icon-col">
					<FontAwesomeIcon className="icon" id="html5" icon={[ 'fab', 'html5' ]} />
				</Col>
				<Col className="icon-col">
					<FontAwesomeIcon className="icon" id="css3" icon={[ 'fab', 'css3-alt' ]} />
				</Col>
				<Col className="icon-col">
					<FontAwesomeIcon className="icon" id="javascript" icon={[ 'fab', 'js-square' ]} />
				</Col>
			</Row>
			<Row id="row2-icons" className="d-flex justify-content-around">
				<Col className="icon-col">
					<FontAwesomeIcon className="icon" id="react" icon={[ 'fab', 'react' ]} />
				</Col>
				<Col className="icon-col">
					<FontAwesomeIcon className="icon" id="nodejs" icon={[ 'fab', 'node' ]} />
				</Col>
				<Col className="icon-col">
					<img className="icon" src={require('./assets/icons/icons8-mongodb-96.png')} alt="mongodb icon" />
				</Col>
				<Col className="icon-col">
					<img className="icon" src={require('./assets/icons/expressjslogo.png')} alt="express.js icon" />
				</Col>
			</Row>
		</Row>
	);
}

export default Icons;
