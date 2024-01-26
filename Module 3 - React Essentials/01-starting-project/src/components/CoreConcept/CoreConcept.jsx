import './CoreConcept.scss';

export const CoreConcept = ({ conceptHeader, conceptDescription, conceptImage }) => {
	return (
		<ul>
			<li>
				<img src={conceptImage} alt={conceptHeader} />
			</li>
			<li>
				<h3>{conceptHeader}</h3>
			</li>
			<li>
				<p>{conceptDescription}</p>
			</li>
		</ul>
	);
};
