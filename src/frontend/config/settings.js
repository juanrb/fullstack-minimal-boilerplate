const settings = {
	backend: {
		headers: {
			'Content-Type': 'application/json',
		},
		url: 'https://jsonplaceholder.typicode.com/',
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
