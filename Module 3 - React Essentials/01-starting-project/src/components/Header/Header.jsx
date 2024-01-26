import { headerDescriptions } from '../../utils/data';

import atom from '../../assets/react-core-concepts.png';

import './Header.scss';

export const Header = () => {
	const randomInt = (max) => {
		return Math.floor(Math.random() * (max + 1));
	};

	const description = headerDescriptions[randomInt(2)];
	return (
		<header>
			{/* {atom} - dynamic value expression  */}
			<img src={atom} alt='Stylized atom' />
			<h1>React Essentials</h1>
			{/* {description - dynamic value expression} */}
			<p>{description} React concepts you will need for almost any app you are going to build!</p>
		</header>
	);
};
