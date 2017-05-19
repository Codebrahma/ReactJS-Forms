import React, { PropTypes } from 'react';

const File = (props) => {
  const { className, title, name, getErrorMessage } = props;
  const errorMessage = getErrorMessage();
  const wrapperClassName = `input-group ${className}${errorMessage ? ' invalid' : ''}`;

  return (
    <div className={wrapperClassName}>
      {title && <label htmlFor={name}>{title}</label>}
      <input
        name={name}
        type="file"
      />
      {errorMessage && <span className="validation-error">{errorMessage}</span>}
    </div>
  );
};

File.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  name: PropTypes.string.isRequired,
  getErrorMessage: PropTypes.func.isRequired,
};

File.defaultProps = {
  className: '',
  title: '',
};

export default File;
