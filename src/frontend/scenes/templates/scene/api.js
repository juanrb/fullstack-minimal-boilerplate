// Local
import { helpers } from '../../helpers';
import settings from '../../config/settings';

const ENDPOINT = settings.routes.___Scene___;

let api = {
	___Scene___: helpers.api.crudFactory(settings.backend.url, ENDPOINT, settings.backend.headers)
}

export default api;
