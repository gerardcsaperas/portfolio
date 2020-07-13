import React from 'react';
import './style/App.css';
import { Container } from 'react-bootstrap';
import BackgroundImage from './BackgroundImage';
import NavigationBar from './NavigationBar';
import Home from './Home';
import Portfolio from './Portfolio';
import Contact from './Contact';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			page: 'Home',
			typingAnimation: 'on',
			navbarVisible: false,
			windowHeight: window.innerHeight
		};
	}
	setNavbarVisible = () => {
		this.setState({
			navbarVisible: true
		});
	};
	setTypingOff = () => {
		// If the user already saw the animation once, deactivate it
		this.setState({
			typingAnimation: 'off'
		});
	};
	toContact = () => {
		this.setState({
			page: 'Contact'
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
				<BackgroundImage />
				{this.state.navbarVisible ? (
					<NavigationBar toPortfolio={this.toPortfolio} toHome={this.toHome} toContact={this.toContact} />
				) : null}
				<Portfolio page={this.state.page} />
				<Home
					typingAnimation={this.state.typingAnimation}
					setTypingOff={this.setTypingOff}
					setNavbarVisible={this.setNavbarVisible}
					page={this.state.page}
					toContact={this.toContact}
				/>
				<Contact page={this.state.page} windowHeight={this.state.windowHeight} />
			</Container>
		);
	}
}

export default App;
