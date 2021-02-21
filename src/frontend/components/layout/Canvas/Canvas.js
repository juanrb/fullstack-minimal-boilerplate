// Libs
import React, {
	// useState,
} from 'react';
import PropTypes from 'prop-types';

// Local
import './Canvas.scss';

/**
 * @class
 * @description 
 */
const Canvas = props => {
	// States

	// Variables
	
	// Render
	return (
		<div className='Canvas'>
			Canvas<br />
			<React.Suspense fallback=''>{props.children}</React.Suspense>
		</div>
	);
}

// DefaultProps
Canvas.defaultProps = {
	// className: 'Canvas'
};

// PropTypes
Canvas.propTypes = {
};

export default Canvas;
