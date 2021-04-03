require('dotenv').config();

/* eslint no-process-env: 0 */
module.exports = {
	apis: {
		jsonPlaceholder: {
			authUrl: process.env.REACT_APP_API1_ENDPOINT_AUTH_URL,
			clientId: process.env.REACT_APP_API1_CLIENT_ID,
			clientSecret: process.env.REACT_APP_API1_CLIENT_SECRET,
			url: process.env.REACT_APP_API1_URL,
		},
	},

	db: {
		string: process.env.REACT_APP_DB_STRING || process.env.CLEARDB_DATABASE_URL,
	},

	server: {
		cdn: process.env.REACT_APP_SERVER_CDN_URL,
		headers: {
			'Content-Type': 'application/json',
		},
		port: process.env.REACT_APP_SERVER_PORT || process.env.PORT,
		url: `${process.env.REACT_APP_SERVER_URL}${process.env.REACT_APP_SERVER_PORT ? ':' + process.env.REACT_APP_SERVER_PORT : ''}/api/`,
	},
}
