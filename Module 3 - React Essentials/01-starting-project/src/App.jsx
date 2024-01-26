// Named imports use curly braces to import the file
import { Header } from './components/Header/Header.jsx';
import { CoreConcept } from './components/CoreConcept/CoreConcept.jsx';
import { SubMenuButton } from './components/SubMenuButton/SubMenuButton.jsx';

import { coreConceptsInfo, buttonContent } from './utils/data.js';

export const App = () => {
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
						{buttonContent.map((eachLabel) => (
							<SubMenuButton>{eachLabel}</SubMenuButton>
						))}
					</menu>
				</section>
			</main>
		</div>
	);
};
