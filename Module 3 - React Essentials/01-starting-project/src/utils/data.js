import components from '../assets/components.png';
import jsxImage from '../assets/jsx-ui.png';
import propsImage from '../assets/config.png';
import stateImage from '../assets/state-mgmt.png';

export const coreConceptsInfo = [
	{
		title: 'Components',
		description: 'The core UI Building Block',
		image: components,
	},
	{
		title: 'JSX',
		description:
			'Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered.',
		image: jsxImage,
	},
	{
		title: 'Props',
		description:
			'Make components configurable (and therefore reusable) by passing input data to them.',
		image: propsImage,
	},
	{
		title: 'State',
		description:
			'React-managed data which, when changed, causes the component to re-render & the UI to update.',
		image: stateImage,
	},
];

export const headerDescriptions = ['Fundamental', 'Core', 'Crucial'];
