// FIXME: refactor this class
/**
 * @class
 * @description 
 */
class Logger {
	constructor(namespace, toggle) {
		this.namespace = namespace;
		this.toggle = toggle;
	}

	log(methodName, message, obj) {
		this.toggle && console.log(`${this.namespace}::${methodName} -> ${message} |`, obj);
	}
	
	info(methodName, message, obj) {
		this.toggle && console.log(`%c ${this.namespace}::${methodName} -> ${message} |`, 'color: yellowgreen;', obj);
	}

	error(methodName, message, obj) {
		this.toggle && console.log(`%c ${this.namespace}::${methodName} -> ${message} |`, 'color: #9B1B30;', obj);
	}
}

export { Logger };
