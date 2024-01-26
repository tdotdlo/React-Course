import { coreConceptsInfo, headerDescriptions } from './utils/data.js';

import atom from './assets/react-core-concepts.png';

// Header Component
const Header = () => {
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

// Core Concept  - Card Component
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
						{coreConceptsInfo.map((eachConcept) => (
							<ul>
								<CoreConcept
									conceptImage={eachConcept.image}
									conceptHeader={eachConcept.title}
									conceptDescription={eachConcept.description}
								/>
							</ul>
						))}
					</div>
				</section>
			</main>
		</div>
	);
};
