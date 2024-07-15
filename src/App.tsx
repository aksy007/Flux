import React from 'react';
import { useLocation } from 'react-router-dom';
import { renderComponent } from './router/route';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import styles from './index.module.scss'

const App: React.FC = () => {
	const location = useLocation();
	const Component = renderComponent(location?.pathname);

	return (
		<div className={styles.main}>
			<Header />
			<Sidebar />
			<main className={styles.componentPage}>{Component}</main>
		</div>
	);
};

export default App;
