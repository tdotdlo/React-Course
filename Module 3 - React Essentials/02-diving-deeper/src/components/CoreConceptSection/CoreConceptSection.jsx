import { CoreConcept } from '../CoreConcept/CoreConcept';
import { Section } from '../Section.jsx';

import { coreConceptsInfo } from '../../utils/data.js';

import './CoreConceptSection.scss';

export const CoreConceptSection = () => {
	return (
		<>
			<Section title='Core Concepts for React'>
				<section id='core-concepts'>
					<div className='core-concepts__container'>
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
			</Section>
		</>
	);
	<h2>Core Concepts for React</h2>;
};
