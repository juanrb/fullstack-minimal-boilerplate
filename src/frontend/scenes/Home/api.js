// Local
import { helpers } from '../../helpers';
import settings from '../../config/settings';
import environment from '../../../environment';

// const ENDPOINT = settings.routes.home;
const ENDPOINT = 'posts';

let api = {
	home: helpers.api.crudFactory(environment.apis.jsonPlaceholder.url, ENDPOINT, settings.backend.headers),
	backTest: helpers.api.crudFactory(settings.backend.url, ENDPOINT, settings.backend.headers),
}

export default api;
