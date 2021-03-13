// Libs
import React, {
	// useState,
} from 'react';
import PropTypes from 'prop-types';

// Local
import './Skeleton.scss';
import Canvas from '../Canvas/Canvas';
import Footer from '../Footer/Footer';
import HeaderNav from '../HeaderNav/HeaderNav';
import SidebarNav from '../SidebarNav/SidebarNav';

// Namespace
const NS = 'Skeleton';

/**
 * @class
 * @description
 */
const Skeleton = props => {
	// States

	// Variables

	// Render
	return (
		<div className={NS}>
			{NS}
			<HeaderNav {...props} />
			<SidebarNav {...props} />
			<Canvas {...props} />
			<Footer {...props} />
		</div>
	)
}

// DefaultProps
Skeleton.defaultProps = {
};

// PropTypes
Skeleton.propTypes = {
};

export default Skeleton;
