import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import { NotFound } from '../components/404';
import LandingPage from '../pages/Landing/Landing';
import About from '../components/About';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		// loader: rootLoader,
		children: [
			{
				path: '',
				element: <LandingPage />,
				// loader: teamLoader,
			},
			{
				path: 'project/:id',
				element: <About />,
				// loader: teamLoader,
			},
		],
	},
	{
		path: '*',
		element: <NotFound />,
	},
]);

export default router;
