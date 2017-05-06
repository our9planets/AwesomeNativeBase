import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

import App from './src/App';

class AwesomeNativeBase extends Component {
  render() {
    return (
      <App />
    )
  }
}

AppRegistry.registerComponent('AwesomeNativeBase', () => AwesomeNativeBase);
