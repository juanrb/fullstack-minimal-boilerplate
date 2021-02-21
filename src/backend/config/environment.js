require('dotenv').config();

/* eslint no-process-env: 0 */
module.exports = {
	apis: {
		api1: {
			authUrl: process.env.API1_ENDPOINT_AUTH_URL,
			clientId: process.env.API1_CLIENT_ID,
			clientSecret: process.env.API1_CLIENT_SECRET,
		},
	},

	db: {
		host: process.env.DB_HOST,
		name: process.env.DB_NAME,
		user: process.env.DB_USER,
		pass: process.env.DB_PASS,
	},

	server: {
		cdn: process.env.SERVER_CDN_URL,
		url: `${process.env.SERVER_URL}:${process.env.SERVER_PORT}/`,
		port: process.env.SERVER_PORT,
	},
}
