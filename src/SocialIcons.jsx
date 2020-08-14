import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './style/SocialIcons.css';

export default function SocialIcons() {
	return (
		<div id="social-icons">
			<a href="https://github.com/gerardcsaperas" target="_blank" rel="noopener noreferrer">
				<FontAwesomeIcon icon={[ 'fab', 'github' ]} />
			</a>
			<a href="https://www.linkedin.com/in/gerardcastrelosaperas/" target="_blank" rel="noopener noreferrer">
				<FontAwesomeIcon icon={[ 'fab', 'linkedin' ]} />
			</a>
			<a
				href="https://drive.google.com/file/d/1RGVpPOHJCITqqswI88io_6dLSP27HTuz/view?usp=sharing"
				target="_blank"
				rel="noopener noreferrer"
			>
				<FontAwesomeIcon icon={[ 'fab', 'free-code-camp' ]} />
			</a>
		</div>
	);
}
