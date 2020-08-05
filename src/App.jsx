import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './style/App.css';

// Fontawesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

// Components
import BackgroundImage from './BackgroundImage';
import SocialIcons from './SocialIcons';
import Home from './Home';
import Contact from './Contact';
import Icons from './Icons';

// Fontawesome (2)
library.add(fab);

export default function App() {
	return (
		<Router>
			<Fragment>
				<BackgroundImage />
				<SocialIcons />
				<Switch>
					<Route exact path="/contact" component={Contact} />
					<Route exact path="/" component={Home} />
				</Switch>
				<Icons />
			</Fragment>
		</Router>
	);
}
