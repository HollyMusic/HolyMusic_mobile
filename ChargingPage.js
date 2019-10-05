import React from 'react';
import {
  View,
  Image,
  Dimensions
} from 'react-native';
import {
  Spinner
} from 'native-base';

const image = require("./assets/holy-music-image.png");

export default class ChargingPage extends React.Component {

  render() {
    const { height, width } =  Dimensions.get('window');
    return (
      <View style={{height, width, position: "relative"}}>
        <Image
          style={{maxWidth: width, maxHeight: height}}
          source={image}
        />
        <Spinner style={{position: "absolute", bottom: 5, right: 170 }} color="blue"/>
      </View>
    )
  }
}