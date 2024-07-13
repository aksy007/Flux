import React from 'react';
import { useLocation } from 'react-router-dom';
import { renderComponent } from './router/route';
import Header from './components/Header/Header';

const App: React.FC = () => {
	const location = useLocation();
	const Component = renderComponent(location?.pathname);

	return (
		<div className='app'>
			<Header />
			<main className='main-content'>{Component}</main>
		</div>
	);
};

export default App;
