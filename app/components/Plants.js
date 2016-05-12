import React, { PropTypes, Component } from 'react'

export default class Plants extends Component {
  render() {
    return (
      <ul>
        {this.props.plants.map((plant, i) =>
          <li key={i}>{plant.name}</li>
        )}
      </ul>
    )
  }
}

Plants.propTypes = {
  plants: PropTypes.array.isRequired
};
