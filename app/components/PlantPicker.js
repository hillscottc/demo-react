import React, { Component, PropTypes } from 'react'

export default class PlantPicker extends Component {
  render() {
    const {onClick} = this.props;

    return (
      <span>
        <input type="button" onClick={onClick}>
          Go
        </input>
      </span>
    )
  }
}

PlantPicker.propTypes = {
  onClick: PropTypes.func.isRequired
};
