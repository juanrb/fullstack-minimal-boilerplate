// Libs
import React, {
	Component
} from 'react';
import {
	Helmet,
	HelmetProvider,
} from 'react-helmet-async';

// Local
import AppRouter from './config/AppRouter/AppRouter';

/**
 * @class
 * @description 
 */
const App = () => (
	<div className="App">
		<HelmetProvider>
			<Helmet>
				<title>Fullstack Minimal Boilerplate</title>
				<link rel='shortcut icon' href={'./favicon.ico'} />
			</Helmet>

			<AppRouter />
		</HelmetProvider>
	</div>
);

export default App;
