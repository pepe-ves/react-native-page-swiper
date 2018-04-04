'use strict';

import React, { Component } from 'react';
import { View } from 'react-native';
import { PropTypes } from 'prop-types'

export default class Dot extends Component {
  static propTypes = {
    color: PropTypes.string,
    diameter: PropTypes.number,
    style: View.propTypes.style,
  };

  static defaultProps = {
    color: 'rgba(192, 192, 192, 1)',
    diameter: 8,
  };

  render() {
    const { color, diameter } = this.props;

    return (
      <View
        style={ [{
          backgroundColor: color,
          width: diameter,
          height: diameter,
          borderRadius: diameter / 2,
          marginLeft: 3,
          marginRight: 3,
          marginTop: 3,
          marginBottom: 3,
        }, this.props.style] }
      />
    );
  }
}
