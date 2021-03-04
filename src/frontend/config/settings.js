import environment from '../../environment'

const settings = {
	backend: {
		headers: {
			'Content-Type': 'application/json',
		},
		url: `${environment.server.url}api/`,
	},

	logger: {
		requests: true,
	},

	routes: {
		// SCENES ////////////
		home: '/home',
	},
}

export default settings;
