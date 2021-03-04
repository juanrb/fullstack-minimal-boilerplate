// Local
import { helpers } from '../../helpers';
import settings from '../../config/settings';
import environment from '../../../environment';

// const ENDPOINT = settings.routes.home;
const ENDPOINT = 'posts';

let api = {
	// home: helpers.api.crudFactory(environment.apis.jsonPlaceholder.url, ENDPOINT),
	home: helpers.api.crudFactory(environment.server.url, ENDPOINT, environment.server.headers),
}

export default api;
