import React from 'react';
import './style/App.css';
import { Container } from 'react-bootstrap';
import NavigationBar from './NavigationBar';
import Home from './Home';
import Portfolio from './Portfolio';
import Contact from './Contact';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			page: 'Home',
			typingAnimation: 'on'
		};
	}
	setTypingOff = () => {
		// If the user already saw the animation once, deactivate it
		this.setState({
			typingAnimation: 'off'
		});
	};
	toHome = () => {
		this.setState({
			page: 'Home'
		});
	};
	toPortfolio = () => {
		this.setState({
			page: 'Portfolio'
		});
	};
	render() {
		return (
			<Container id="App" fluid>
				<NavigationBar toPortfolio={this.toPortfolio} toHome={this.toHome} />
				<Portfolio page={this.state.page} />
				<Home
					typingAnimation={this.state.typingAnimation}
					setTypingOff={this.setTypingOff}
					page={this.state.page}
				/>
			</Container>
		);
	}
}

export default App;
