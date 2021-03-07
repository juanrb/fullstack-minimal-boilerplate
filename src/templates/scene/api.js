// Local
import { helpers } from '../../helpers';
import environment from '../../../environment';

const ENDPOINT = 'posts';

/**
 * use json placeholder or node backend
 * @example jsonplaceholder endpoints: posts, comments, albums, photos, todos, users
 */
let api = {
	___scene___: helpers.api.crudFactory(environment.apis.jsonPlaceholder.url, ENDPOINT),
	// ___Scene___: helpers.api.crudFactory(environment.server.url, ENDPOINT, environment.server.headers),
}

export default api;
