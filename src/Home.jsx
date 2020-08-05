import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './style/Home.css';
import { Spring } from 'react-spring/renderprops';

function Home(props) {
	const [ animationSeen, setAnimationSeen ] = useState(false);
	useEffect(() => {
		/*
		Type:		ANIMATION
		Desc.		Typing animation for 'a web developer'.
					Once the animation is finished, show navigation buttons.
		*/
		let i = 0;
		const txt = 'a web developer';
		const speed = 50;

		function typeWriter() {
			if (i < txt.length) {
				document.getElementById('webdev-text').innerHTML += txt.charAt(i);
				i++;
				setTimeout(typeWriter, speed);
			} else {
				setAnimationSeen(true);
			}
		}
		setTimeout(typeWriter, 1500);
	}, []);
	return (
		<Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
			{(style) => (
				<div style={style} id="Home">
					<div id="text">
						<p className="display-3">Hi,</p>
						<p className="display-1">it's Gerard</p>
						<p id="webdev-text" className="display-3" />
					</div>
					{animationSeen === false ? null : (
						<Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
							{(style) => (
								<div id="contact-button-container" style={style}>
									<Link to="/contact" id="hire" onClick={props.toContact} />
								</div>
							)}
						</Spring>
					)}
				</div>
			)}
		</Spring>
	);
}

export default Home;
