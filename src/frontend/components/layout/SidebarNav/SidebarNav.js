// Libs
import React, {
	// useState,
} from 'react';
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

	// Render
	return (
		<nav className={NS}>
			{NS}
			<ul>
				{ props.menuItems.map((e, i) => <li key={i} className={e.className} alt={e.alt} onClick={e.onClick}>{e.title}</li>) }
			</ul>
		</nav>
	)
}

const defaultMenuItems = [
	{ title: 'sample', alt: 'sample alt', iconClass: 'icon-sample', className: 'sample-class-name', onClick: () => console.log('sample clicked') },
];

// DefaultProps
SidebarNav.defaultProps = {
	menuItems: defaultMenuItems,
};

// PropTypes
SidebarNav.propTypes = {
};

export default SidebarNav;
