// Local
import { helpers } from '../../helpers';
import settings from '../../config/settings';

const ENDPOINT = settings.routes.___Scene___;

// use json placeholder or node backend
let api = {
	___Scene___: helpers.api.crudFactory(environment.apis.jsonPlaceholder.url, ENDPOINT),
	// ___Scene___: helpers.api.crudFactory(environment.server.url, ENDPOINT, environment.server.headers),
}

export default api;
