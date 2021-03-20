const services = require('./services');

/**
 * @method
 * @description 
 */
exports.getList = async (req, res, next) => {
	res.send(await services.getList());
};

/**
 * @method
 * @description 
 */
exports.getOne = async (req, res, next) => {
	res.send(await services.getOne(req.params.id));
};

/**
 * @method
 * @description 
 */
exports.create = async (req, res, next) => {
	res.send(await services.create(req.body));
};

/**
 * @method
 * @description 
 */
exports.update = async (req, res, next) => {
	res.send(await services.update(req.params.id, req.body));
};

/**
 * @method
 * @description 
 */
exports.delete = async (req, res, next) => {
	res.sendStatus(await services.delete(req.params.id) ? 200 : 400);
};
