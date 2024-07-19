import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import styles from './index.module.scss';

const App: React.FC = () => {
	return (
		<>
			<Header />
			<div className={styles.container}>
				<Sidebar />
				<div className={styles.component}>
					<Outlet />
				</div>
			</div>
		</>
	);
};

export default App;
