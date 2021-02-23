// Local
import { helpers } from '../../helpers';
import settings from '../../config/settings';

// const ENDPOINT = settings.routes.home;
const ENDPOINT = 'posts';

let api = {
	home: helpers.api.crudFactory(settings.backend.url, ENDPOINT, settings.backend.headers)
}

export default api;
