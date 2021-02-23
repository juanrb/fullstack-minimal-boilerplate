// Libs

// Local
import { Logger } from './logger';
import settings from '../config/settings';

const logger = new Logger('helpers.api', settings.logger.requests);
const METHODS = { GET: 'GET', POST: 'POST', PUT: 'PUT', DELETE: 'DELETE' };

// /**
//  * @method
//  * @description 
//  */
// const composeHeader = (options) => {
// 	const authorization = { 'Authorization': options.token };
// 	const cookie = { 'Cookie': options.cookie };
// 	const jsonType = { 'Content-Type': 'application/json' };
// 	const language = options.language || 'en';

// 	return {
// 		'Accept': 'application/json',
// 		...(options.token && authorization),
// 		...(options.cookie && cookie),
// 		...(!options.isFile && jsonType), // If it's a file, fetch autocompletes Content-Type field, otherwise assumes json by default
// 		'Content-Language': language,
// 		'X-Requested-With': 'XMLHttpRequest', // for security reasons
// 		// 'Access-Control-Allow-Origin': '*',
// 	};
// };

/**
 * @function
 * @description Request wrapper. Isolates ugly promisified code, using simple callbacks for reject/success/error
 */
const request = (method, headers, body, endpoint, success, reject, error) => {

	/**
	 * @method
	 * @description Checks if the body is a FormData type
	 */
	const isFile = body => body && body.toString() === '[object FormData]';

	/**
	 * @method
	 * @description Ignores the response object for DELETE method, otherwise returns the json 
	 */
	const parseStatus = res => {
		if (res.status === 200) {
			return method === METHODS.DELETE ? success('OK') : res.json();
		}

		logger.error('request', 'reject', res);
		reject(res);
		return Promise.reject(res);
	}

	/**
	 * @method
	 * @description 
	 */
	const resolveResponse = res => {
		res && logger.info('request', 'success', res);
		res && success(res);
	}

	/**
	 * @method
	 * @description 
	 */
	const parseError = err => {
		logger.error('request', err.status === undefined ? 'Endpoint unreachable' : 'error', err);
		error(err);
	}


	// BODY ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	// an object with body property (POST & PUT only) otherwise false
	const fetchBody = ((method === METHODS.POST || method === METHODS.PUT) && { 'body': isFile(body) ? body : JSON.stringify(body) });

	// options for fetch
	const fetchOptions = {
		headers,
		...fetchBody,
		method
	};

	logger.info('request', method, endpoint);

	return fetch(endpoint, fetchOptions).then(parseStatus).then(resolveResponse).catch(parseError);
};


const crudFactory = (backendUrl, endpoint, headers) => ({
	/**
	 * @method
	 * @description 
	 */
	getAll: (body, success, reject, error) => {
		const url = `${backendUrl}${endpoint}`;
		return request(METHODS.GET, headers, body, url, success, reject, error);
	},

	/**
	 * @method
	 * @description 
	 */
	getOne: (id, success, reject, error) => {
		const url = `${backendUrl}${endpoint}/${id}`;
		return request(METHODS.GET, headers, null, url, success, reject, error);
	},

	/**
	 * @method
	 * @description Saves/updates
	 */
	save: (body, success, reject, error) => {
		const method = body.id ? METHODS.PUT : METHODS.POST;
		const url = `${backendUrl}${endpoint}`;
		return request(method, headers, body, url, success, reject, error);
	},

	/**
	 * @method
	 * @description updates
	 */
	update: (body, success, reject, error) => {
		const url = `${backendUrl}${endpoint}`;
		return request(METHODS.PUT, headers, body, url, success, reject, error);
	},

	/**
	 * @method
	 * @description 
	 */
	remove: (id, success, reject, error) => {
		const url = `${backendUrl}${endpoint}/${id}`;
		return request(METHODS.DELETE, headers, null, url, success, reject, error);
	},
});


const api = {
	crudFactory,
	request,
};

export { api };
