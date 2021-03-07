// Local
import { helpers } from '../../helpers';
import environment from '../../../environment';

const ENDPOINT = 'users';

/**
 * use json placeholder or node backend
 * @example jsonplaceholder endpoints: posts, comments, albums, photos, todos, users
 */
let api = {
	home: helpers.api.crudFactory(environment.apis.jsonPlaceholder.url, ENDPOINT),
	// home: helpers.api.crudFactory(environment.server.url, ENDPOINT, environment.server.headers),
}

export default api;
