import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './style/SocialIcons.css';

export default function SocialIcons() {
	return (
		<div id="social-icons">
			<button>
				<FontAwesomeIcon icon={[ 'fab', 'github' ]} />
			</button>
			<button>
				<FontAwesomeIcon icon={[ 'fab', 'linkedin' ]} />
			</button>
			<button>
				<FontAwesomeIcon icon={[ 'fab', 'apple' ]} />
			</button>
		</div>
	);
}
