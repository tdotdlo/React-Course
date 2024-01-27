// Named imports use curly braces to import the file
import { Header } from './components/Header/Header.jsx';
import { CoreConcept } from './components/CoreConcept/CoreConcept.jsx';
import { SubMenuButton } from './components/SubMenuButton/SubMenuButton.jsx';

import { coreConceptsInfo, buttonContent } from './utils/data.js';

export const App = () => {
	const handleClick = (tabCaption) => {
		console.log(tabCaption);
	};

	return (
		<div>
			<Header />
			<main>
				<h2>Core Concepts for React</h2>
				<section id='core-concepts'>
					<div className='core-concepts-container'>
						{coreConceptsInfo.map((eachConcept, i) => (
							<CoreConcept
								conceptImage={eachConcept.image}
								conceptHeader={eachConcept.title}
								conceptDescription={eachConcept.description}
								key={`${i + 1}`}
							/>
						))}
					</div>
				</section>
				<section id='examples'>
					<h2>Examples</h2>
					<menu>
						{/* onUserClick prop passes the action down to the component 
						so when the action happens, it will be on the component
						itself */}
						{buttonContent.map((eachLabel) => (
							// If you are passing a parameter to the function, use an anonymous
							// fn. Otherwise, the fn will run right away.

							// By creating an anonymous fn, this will control how arguments
							// / parameters are passed in the fn
							<SubMenuButton onUserClick={() => handleClick({ eachLabel })}>
								{eachLabel}
							</SubMenuButton>
						))}
					</menu>
				</section>
			</main>
		</div>
	);
};
