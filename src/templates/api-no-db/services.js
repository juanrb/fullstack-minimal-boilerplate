// Local

/**
 * @method
 * @description 
 */
exports.getList = async () => [{ message: '___apiname___-one'}, { message: '___apiname___-two'}];

/**
 * @method
 * @description 
 */
exports.getOne = async (id) => ({ message: '___apiname___-one'});

/**
 * @method
 * @description 
 */
exports.create = async (obj) => ({ message: '___apiname___-created'});

/**
 * @method
 * @description 
 */
exports.update = async (id, obj) => ({ message: '___apiname___-updated'});

/**
 * @method
 * @description 
 */
exports.delete = async (id) => ({ message: '___apiname___-deleted'});
