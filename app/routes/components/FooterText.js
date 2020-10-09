import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const FooterText = (props) => (
	<React.Fragment>
		<span className="small">
        	{ moment().format("ddd, MMM DD, YYYY h:mm:ss A") }
        </span>
	</React.Fragment>
)
FooterText.propTypes = {
    year: PropTypes.node,
	name: PropTypes.node,
	desc: PropTypes.node,
};
FooterText.defaultProps = {
    year: "2018",
    name: "Admin Theme",
    desc: "Bootstrap 4, React 16 (latest) & NPM"
};

export { FooterText };
