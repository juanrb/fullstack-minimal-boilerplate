require('dotenv').config();

/* eslint no-process-env: 0 */
module.exports = {
	apis: {
		jsonPlaceholder: {
			authUrl: process.env.REACT_APP_API1_ENDPOINT_AUTH_URL,
			clientId: process.env.REACT_APP_API1_CLIENT_ID,
			clientSecret: process.env.REACT_APP_API1_CLIENT_SECRET,
			url: process.env.REACT_APP_API1_URL
		},
	},

	db: {
		host: process.env.REACT_APP_DB_HOST,
		name: process.env.REACT_APP_DB_NAME,
		user: process.env.REACT_APP_DB_USER,
		pass: process.env.REACT_APP_DB_PASS,
	},

	server: {
		cdn: process.env.REACT_APP_SERVER_CDN_URL,
		url: `${process.env.REACT_APP_SERVER_URL}:${process.env.REACT_APP_SERVER_PORT}/`,
		port: process.env.REACT_APP_SERVER_PORT,
	},
}
