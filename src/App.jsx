import Reactlogo from './assets/logo.svg?react';
// import logo from './assets/logo.svg';
import './App.css';

export const App = () => {
	const currentYear = new Date().getFullYear(); // императивный

	return (
		<div className="App">
			<header className="App-header">
				<Reactlogo className="App-logo" alt="logo" />
				{/* Вставляет как кампонент (нельзя выделить) или как картинку (ниже строчка кода) */}
				{/* <img src={logo} className="App-logo" alt="logo" /> */}
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
				<p> {currentYear} </p> //декларативный
			</header>
		</div>
	);
};
