// Libs
import React, {
	// useState,
} from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

// Local
import './SidebarNav.scss';

// Namespace
const NS = 'SidebarNav';

/**
 * @class
 * @description 
 */
const SidebarNav = props => {
	// States

	// Variables
	const history = useHistory();

	// Render
	return (
		<nav className={NS}>
			{NS}
			<ul>
				{props.menuItems.map((e, i) => <li key={i} className={e.className} alt={e.alt} onClick={() => history.push(e.route)}>{e.title}</li>)}
			</ul>
		</nav>
	)
}

const defaultMenuItems = [
	{ title: 'home', alt: 'home alt', iconClass: 'icon-home', className: 'home-class-name', route: '/home' },
];

// DefaultProps
SidebarNav.defaultProps = {
	menuItems: defaultMenuItems,
};

// PropTypes
SidebarNav.propTypes = {
};

export default SidebarNav;
