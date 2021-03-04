// Local

/**
 * @method
 * @description 
 */
exports.getList = async () => [{ message: 'one'}, { message: 'two'}];

/**
 * @method
 * @description 
 */
exports.getOne = async (id) => ({ message: 'one'});

/**
 * @method
 * @description 
 */
exports.create = async (obj) => ({ message: 'created'});

/**
 * @method
 * @description 
 */
exports.update = async (id, obj) => ({ message: 'updated'});

/**
 * @method
 * @description 
 */
exports.delete = async (id) => ({ message: 'deleted'});
