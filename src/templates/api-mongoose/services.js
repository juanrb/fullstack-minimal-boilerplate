// Local
const model = require('./model');

/**
 * @method
 * @description 
 */
exports.getList = async () => await model.___Apiname___.findAll();

/**
 * @method
 * @description 
 */
exports.getOne = async (id) => await model.___Apiname___.findByPk(id);

/**
 * @method
 * @description 
 */
exports.create = async (obj) => await model.___Apiname___.create(obj);

/**
 * @method
 * @description 
 */
exports.update = async (id, obj) => await model.___Apiname___.update(obj, { where: { id } });

/**
 * @method
 * @description 
 */
exports.delete = async (id) => await model.___Apiname___.destroy({ where: { id } });
