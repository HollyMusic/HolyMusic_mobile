import React from 'react';
import {
  View,
  Image,
  Dimensions,
  StyleSheet,
  Animated
} from 'react-native';

const window = Dimensions.get("window");

const image = require("./assets/holy-music-image.png");
const logo = require("./assets/holy-music-logo.png");

export default class ChargingPage extends React.Component {

  state = {
    opacityLogo: new Animated.Value(0.2)
  }

  _inOpacity = () => {
    Animated.timing(this.state.opacityLogo, {
      toValue: 1,
      duration: 2000
    }).start();
  }

  _outOpacity = () => {
    Animated.timing(this.state.opacityLogo, {
      toValue: 0.2,
      duration: 2000
    }).start();
  }

  _handleOpacity = () => {
    this._outOpacity()
    setTimeout(this._inOpacity, 2000);
  }

  componentDidMount() {
    this._inOpacity();
    setInterval(this._handleOpacity, 4000)
  }

  render() {
    const { height, width } =  Dimensions.get('window');
    return (
      <View style={{position: "relative"}}>
        <Image
          style={{maxWidth: width, maxHeight: height}}
          source={image}
        />
        <Animated.View style={{...styles.container, opacity: this.state.opacityLogo}}>
          <Image
            style={{
              width: width - 50,
              height: 100
            }}
            source={logo}
          />
        </Animated.View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    zIndex: 4,
    height: window.height,
    width: window.width,
    top: 0,
    left: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
})