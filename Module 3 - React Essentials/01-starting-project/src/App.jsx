import { useMemo } from 'react';

// Importing Components after seperating them from main project
import { Header } from './components/Header/Header.jsx';
import { CoreConceptSection } from './components/CoreConceptSection/CoreConceptSection.jsx';
import { ExamplesSection } from './components/ExamplesSection/ExamplesSection.jsx';

export const App = () => {
	return (
		<>
			<Header />
			<main>
				<CoreConceptSection />
				<ExamplesSection />
			</main>
		</>
	);
};
