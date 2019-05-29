import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CustomTextarea extends Component {

  state = {
    value: "nothing",
    required: false
  }

  handler = (e) => {
    this.setState({ value: e.target.value });
    this.props.changeValue(this.props.name, this.state.value)
  }

  render = () => {
    let { name, placeholder, value, limit } = this.props;
    let { handler } = this;
    return (
      <label
      className = "pole">
        <div className = "pole">{name}</div>
        <textarea
        className = "input"
          maxLength={limit}
          placeholder={placeholder}
          value={value}
          onChange={handler}
        />
                <p></p>

      </label>
    )
  }

}

CustomTextarea.propTypes = {


  placeholder: PropTypes.string,
  handler: PropTypes.func,
  type: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.any,
  ]),
};



export default CustomTextarea;
