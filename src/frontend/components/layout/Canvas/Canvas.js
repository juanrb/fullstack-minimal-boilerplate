// Libs
import React, {
	// useState,
} from 'react';
import PropTypes from 'prop-types';

// Local
import './Canvas.scss';

// Namespace
const NS = 'Canvas';

/**
 * @class
 * @description 
 */
const Canvas = props => {
	// States

	// Variables

	// Render
	return (
		<div className={NS}>
			{NS}
			<React.Suspense fallback=''>{props.children}</React.Suspense>
		</div>
	);
}

// DefaultProps
Canvas.defaultProps = {
};

// PropTypes
Canvas.propTypes = {
};

export default Canvas;
