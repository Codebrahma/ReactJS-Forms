import React, { PropTypes } from 'react';

const CheckBox= (props) => {
	const { className, name, title, value, checked } = props;
	
	return (
		<div className={className}>
		  <input
		    type="checkbox"
		    name={name}
		    value={value}
		    defaultChecked={checked}
		  />
		  {title}
		</div>
	);
};

CheckBox.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  checked: PropTypes.bool
};

CheckBox.defaultProps = {
	className: '',
	checked: false
};

export default CheckBox;
