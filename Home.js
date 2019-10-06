import React from 'react';
import {
  Image,
  View,
  Text,
  TouchableHighlight,
  StyleSheet
} from 'react-native';
import {
  Actions
} from 'react-native-router-flux';

import { window, appColor } from './constants';

const feelings = [
  "feliz",
  "preocupado",
  "animado",
  "solo",
  "con temor",
  "resentido",
  "impaciente",
  "enamorado",
  "confianza",
  "tranquilo",
  "enojado",
  "miedo",
  "compasión",
  "gratitud"
]

export default class Home extends React.Component {
  render() {
    return (
        <View style={{
          height: window.height,
          width: window.width,
          backgroundColor: appColor,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
          }}>
          <Image
            source={require('./assets/holy-music-logo.png')}
            style={{
              height: 100,
              width: window.width - 50
            }}
          />
          <View style={{alignItems: 'center', marginTop: 25}}>
            <Text
              style={{
                fontSize: 50,
                fontWeight: '200',
                lineHeight: 50
              }}
            >Te damos la</Text>
            <Text
              style={{
                fontSize: 40,
                fontWeight: '700',
                color: 'red',
                lineHeight: 40
              }}
            >Bienvenida</Text>
            <Text
              style={{
                fontSize: 45,
                fontWeight: '100',
                lineHeight: 50,
                textTransform: 'uppercase',
              }}
            >José Melendez</Text>
          </View>
          <View style={{
            borderRadius: 500,
            backgroundColor: '#c2185b',
            height: 150,
            width: 150,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Text style={{
              color: 'white'
            }}>¿Cómo te sientes?</Text>
          </View>
          <View style={{display: 'flex', flexDirection: 'row', maxWidth: '100%', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center'}}>
            <TouchableHighlight style={styles.badge} onPress={() => Actions.musicList()}>
              <Text style={styles.badgeText}>Triste</Text>
            </TouchableHighlight>
            {
              feelings.map((feeling, index) =>
                <View
                  key={index}
                  style={styles.badge}
                >
                  <Text style={styles.badgeText}>{feeling}</Text>
                </View>
              )
            }
          </View>
        </View>
    );
  }
}


const styles = StyleSheet.create({
  badge: {
    width: '30%',
    paddingTop: 10,
    backgroundColor: 'red',
    margin: 3,
    borderRadius: 1000,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  badgeText: {
    color: 'white',
    textTransform: 'uppercase',
  }
})