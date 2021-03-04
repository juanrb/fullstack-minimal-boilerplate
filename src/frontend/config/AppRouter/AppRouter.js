// Libs
import React from 'react';
import {
	BrowserRouter,
	Redirect,
	Route,
	Switch
} from 'react-router-dom';

// Local
import settings from '../settings';
import Admin from '../../components/layout/Admin/Admin';
import Home from '../../scenes/Home/Home';

// NOTE: How to lazy load each scene --> const Users = React.lazy(() => import('../scenes/Users/Users'));

const AppRouter = props => {
	// States

	// Variables
	const { routes } = settings;

	// Render
	return (
		<BrowserRouter>
			<Switch className='AppRouter'>
				{/* Scenes */}
				<Route exact path={routes.home} render={props => <Admin {...props}><Home {...props} /></Admin>} />

				{/* Default rounting */}
				<Route exact path='/' render={() => <Redirect exact from='/' to={routes.home} />} />
				<Route render={() => <Redirect to='/' />} />
			</Switch>
		</BrowserRouter>
	)
}

export default AppRouter;
