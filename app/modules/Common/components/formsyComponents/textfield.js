import React, {Component, PropTypes } from 'react';

class Textfield extends Component {
  render(){
    const {
      className,
      title,
      name,
      type,
      getValue,
      setValue,
      getErrorMessage,
      isRequired
    } = this.props;

    const errorMessage = getErrorMessage();
    const wrapperClassName = `input-group ${className}${errorMessage ? ' invalid' : ''}`;

    return (
      <div className={wrapperClassName}>
        {title && <label htmlFor={name}>{title}<span>{isRequired() ? "*" : null}</span></label>}
        <input
          name={name}
          type={type}
          value={getValue() || ''}
          onChange={e => setValue(e.target.value)}
        />
        {errorMessage && <span className="validation-error">{errorMessage}</span>}
      </div>
    );
  }
};

Textfield.propTypes = {
  name: PropTypes.string.isRequired,
  getValue: PropTypes.func.isRequired,
  setValue: PropTypes.func.isRequired,
  getErrorMessage: PropTypes.func.isRequired,
  type: PropTypes.string,
  className: PropTypes.string,
  title: PropTypes.string,
};

Textfield.defaultProps = {
  type: 'text',
  className: '',
  title: '',
};

export default Textfield;
