// Libs
import React from 'react';
import PropTypes from 'prop-types';

// Local
import './___Scene___.scss';


/**
 * @class
 * @description 
 */
const ___Scene___ = props => {
	// States

	// Props

	return (
		<div className={NS}>
			<Card>
				Hello { props.className }
			</Card>
		</div>
	);
}

// DefaultProps
___Scene___.defaultProps = {
	// className: '___Scene___'
};

// PropTypes
___Scene___.propTypes = {
};

export default ___Scene___;
