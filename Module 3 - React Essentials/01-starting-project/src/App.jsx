import { coreConceptsInfo } from './utils/components.jsx';

import atom from './assets/react-core-concepts.png';

const headerDescriptions = ['Fundamental', 'Core', 'Crucial'];

const randomInt = (max) => {
	return Math.floor(Math.random() * (max + 1));
};

const Header = () => {
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

const CoreConcept = ({ conceptHeader, conceptDescription }) => {
	<div>
		<img src='' alt='' />
		<h3>Title</h3>
		<p>Description</p>
	</div>;
};

export const App = () => {
	return (
		<div>
			<Header />
			<main>
				<section className='core-concepts'>
					<h2>Core Concepts for React</h2>
					<ul>
						{<CoreConcept conceptHeader='' />}

						<CoreConcept />
						<CoreConcept />
						<CoreConcept />
					</ul>
				</section>
			</main>
		</div>
	);
};
