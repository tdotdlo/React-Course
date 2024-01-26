import { coreConceptsInfo } from './utils/components.js';

import atom from './assets/react-core-concepts.png';

const Header = () => {
	const headerDescriptions = ['Fundamental', 'Core', 'Crucial'];

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

const CoreConcept = ({ conceptHeader, conceptDescription, conceptImage }) => {
	return (
		<>
			<li>
				<img src={conceptImage} alt={conceptHeader} />
			</li>
			<li>
				<h3>{conceptHeader}</h3>
			</li>
			<li>
				<p>{conceptDescription}</p>
			</li>
		</>
	);
};

export const App = () => {
	return (
		<div>
			<Header />
			<main>
				<h2>Core Concepts for React</h2>
				<section id='core-concepts'>
					<div className='core-concepts-container'>
						{coreConceptsInfo.map((eachItem) => (
							<ul>
								<CoreConcept
									conceptImage={eachItem.image}
									conceptHeader={eachItem.title}
									conceptDescription={eachItem.description}
								/>
							</ul>
						))}
					</div>
				</section>
			</main>
		</div>
	);
};
