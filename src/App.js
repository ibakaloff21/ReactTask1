import Reactlogo from './assets/logo.svg?react';
// import logo from './assets/logo.svg';
import './App.css';
import { createElement } from 'react';

export const App = () => {
	const currentYear = new Date().getFullYear();

	return createElement(
		'div',
		{ className: 'App' },
		createElement(
			'header',
			{ className: 'App-header' },
			createElement(Reactlogo, {
				className: 'App-logo',
				alt: 'logo',
			}),
			createElement(
				'a',
				{
					className: 'App-link',
					href: 'https://reactjs.org',
					target: '_blank',
					rel: 'noopener noreferrer',
				},
				'Learn React',
			),
			createElement('p', null, +currentYear),
		),
	);
};
