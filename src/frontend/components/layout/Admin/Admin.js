// Libs
import React, {
	// useState,
} from 'react';
import PropTypes from 'prop-types';

// Local
import './Admin.scss';
import Canvas from '../Canvas/Canvas';
import Footer from '../Footer/Footer';
import HeaderNav from '../HeaderNav/HeaderNav';
import SidebarNav from '../SidebarNav/SidebarNav';

// Styles

/**
 * @class
 * @description
 */
const Admin = props => {
	// States

	// Variables

	// Render
	return (
		<div className='Admin'>
			<HeaderNav {...props} />
			<SidebarNav {...props} />
			<Canvas {...props} />
			<Footer {...props} />
		</div>
	)
}

// DefaultProps
Admin.defaultProps = {
	// className: 'Admin'
};

// PropTypes
Admin.propTypes = {
};

export default Admin;
