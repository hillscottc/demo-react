import React, { Component, PropTypes } from 'react'

export default class PlantForm extends Component {
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

PlantForm.propTypes = {
  onClick: PropTypes.func.isRequired
};
