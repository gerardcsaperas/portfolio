import React, { Fragment } from 'react';
import './style/BackgroundImage.css';

function BackgroundImage() {
	/*
	TYPE	FUNCTION
	desc.	Give some dinamism to the background by changing
			the rendered video according to the time of the day.
	*/
	let now = new Date().getHours();

	let backgroundVideo = () => {
		if (now < 5) {
			return '/Videos/sunrise.mp4';
		} else if (now < 11) {
			return '/Videos/day.mp4';
		} else if (now < 17) {
			return '/Videos/cat.mp4';
		} else if (now < 20) {
			return '/Videos/sunset.mp4';
		} else {
			return '/Videos/night.mp4';
		}
	};
	//
	return (
		<Fragment>
			<video autoPlay muted loop id="background-video">
				<source src={backgroundVideo()} type="video/mp4" />
			</video>
			<div id="background-video__dark-layer" />
			<div id="background-image" />
		</Fragment>
	);
}

export default BackgroundImage;
