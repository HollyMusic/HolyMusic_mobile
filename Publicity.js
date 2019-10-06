import React from 'react';
import {
  View,
  Image
} from 'react-native';
import { window } from './constants';

const {height, width} = window;
export default Publicity = (props) => (
  <View style={{height, width}}>
    <Image
      source={require('./assets/concierto.jpg')}
      style={{height, width}}
    />
  </View>
)