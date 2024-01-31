import { CoreConcept } from '../CoreConcept/CoreConcept';

import { coreConceptsInfo } from '../../utils/data.js';

import './CoreConceptSection.scss';

export const CoreConceptSection = () => {
	return (
		<>
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
		</>
	);
	<h2>Core Concepts for React</h2>;
};
