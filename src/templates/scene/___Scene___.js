// Libs
import React from 'react';
import PropTypes from 'prop-types';

// Local
import './___Scene___.scss';

// Namespace
const NS = '___Scene___';

// Globals
const api = {
	___scene___: require('./api').default.___scene___,
}

/**
 * @class
 * @description 
 */
const ___Scene___ = props => {
	// States

	// Variables

	useEffect(() => {
		/**
		 * @async
		 * @description 
		 */
		(async function fetchData() {
			// api.___scene___.getAll(null, res => null, res => null, res => null);
		})();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	// Render
	return (
		<div className={NS}>
			{NS}
		</div>
	);
}

// DefaultProps
___Scene___.defaultProps = {
};

// PropTypes
___Scene___.propTypes = {
};

export default ___Scene___;
