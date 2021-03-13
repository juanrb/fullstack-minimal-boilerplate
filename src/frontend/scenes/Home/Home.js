// Libs
import React, {
	useEffect,
	useState,
} from 'react';
import PropTypes from 'prop-types';

// Local
import './Home.scss';

// Namespace
const NS = 'Home';

// Globals
const api = require('./api').default;

/**
 * @class
 * @description 
 */
const Home = props => {
	// States
	const [users, setUsers] = useState([]);

	// Variables

	useEffect(() => {
		/**
		 * @async
		 * @description 
		 */
		(async function fetchData() {
			api.home.getAll(null, res => setUsers(res), res => null, res => null);
		})();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	// Render
	return (
		<div className={NS}>
			{NS}
			{!!users.length && users.map((e, i) => <p key={i}>{e.name.toLowerCase()}</p>)}
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
