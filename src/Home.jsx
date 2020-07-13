import React, { useEffect } from 'react';
import './style/Home.css';
import { Spring } from 'react-spring/renderprops';
import Icons from './Icons';

function Home(props) {
	useEffect(() => {
		if (props.typingAnimation === 'on' && props.page === 'Home') {
			let i = 0;
			const txt = 'a web developer'; /* The text */
			const speed = 50; /* The speed/duration of the effect in milliseconds */

			function typeWriter() {
				if (i < txt.length) {
					document.getElementById('webdev-text').innerHTML += txt.charAt(i);
					i++;
					setTimeout(typeWriter, speed);
				} else {
					props.setTypingOff();
					props.setNavbarVisible();
				}
			}
			setTimeout(typeWriter, 1500);
		}
	});
	if (props.page === 'Home') {
		return (
			<Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
				{(style) => (
					<div style={style} id="Home">
						<div id="text" className="d-flex flex-column">
							<p className="display-3">Hi,</p>
							<p className="display-1">it's Gerard</p>
							<p id="webdev-text" className="display-3">
								{props.typingAnimation === 'on' ? '' : 'a web developer'}
							</p>
						</div>
						{props.typingAnimation === 'on' ? null : (
							<Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
								{(style) => <a style={style} id="hire" onClick={props.toContact} />}
							</Spring>
						)}
						<Icons />
					</div>
				)}
			</Spring>
		);
	} else {
		return null;
	}
}

export default Home;
