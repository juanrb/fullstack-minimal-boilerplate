// Libs
import React, {
	useEffect,
} from 'react';
import PropTypes from 'prop-types';

// Local
import './Home.scss';

// Namespace
const NS = 'Home';

// Globals
const api = {
	home: require('./api').default.home,
}

/**
 * @class
 * @description 
 */
const Home = props => {
	// States

	// Variables

	useEffect(() => {
		/**
		 * @async
		 * @description 
		 */
		(async function fetchData() {
			api.home.getAll(null, res => console.table(res), res => null, res => null);
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
Home.defaultProps = {
};

// PropTypes
Home.propTypes = {
};

export default Home;
