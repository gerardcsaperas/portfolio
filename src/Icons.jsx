import React from 'react';
import { Row, Col } from 'react-bootstrap';

function Icons() {
	return (
		<Row id="icons" className="d-flex justify-content-around">
			<Row id="row1-icons" className="d-flex justify-content-around">
				<Col className="icon-col">
					<img className="icon" id="git" src={require('./assets/icons/icons8-git-96.png')} alt="git icon" />
				</Col>
				<Col className="icon-col">
					<img
						className="icon"
						id="github"
						src={require('./assets/icons/icons8-github-96.png')}
						alt="github icon"
					/>
				</Col>
				<Col className="icon-col">
					<img
						className="icon"
						id="html"
						src={require('./assets/icons/icons8-html-5-96.png')}
						alt="html5 icon"
					/>
				</Col>
				<Col className="icon-col">
					<img className="icon" id="css" src={require('./assets/icons/icons8-css3-96.png')} alt="css3 icon" />
				</Col>
				<Col className="icon-col">
					<img
						className="icon"
						id="javascript"
						src={require('./assets/icons/icons8-javascript-96.png')}
						alt="javascript icon"
					/>
				</Col>
			</Row>
			<Row id="row2-icons" className="d-flex justify-content-around">
				<Col className="icon-col">
					<img className="icon" id="react" src={require('./assets/icons/reactjs.png')} alt="react.js icon" />
				</Col>
				<Col className="icon-col">
					<img
						className="icon"
						id="redux"
						src={require('./assets/icons/icons8-redux-96.png')}
						alt="redux icon"
					/>
				</Col>
				<Col className="icon-col">
					<img className="icon" src={require('./assets/icons/icons8-mongodb-96.png')} alt="mongodb icon" />
				</Col>
				<Col className="icon-col">
					<img
						className="icon"
						id="nodejs"
						src={require('./assets/icons/icons8-nodejs-96.png')}
						alt="node.js icon"
					/>
				</Col>
				<Col className="icon-col">
					<img className="icon" src={require('./assets/icons/expressjslogo.png')} alt="express.js icon" />
				</Col>
			</Row>
		</Row>
	);
}

export default Icons;
