import React from 'react';
import {
  View,
  Text,
  Image
} from 'react-native';

import { window, appColor } from './constants';

const musics = [
  {
    name: 'Alegría',
    author: 'REDIMI2',
    image: require('./assets/alegria-redimi2.jpg')
  },
  {
    name: 'Alegría Miel',
    author: 'San Marcos',
    image: require('./assets/alegria-miel-san-marcos.jpg')
  },
  {
    name: 'A danzar',
    author: 'Barak',
    image: require('./assets/barak.jpg')
  }
]

const border = 5;

export default class MusicList extends React.Component {

  render() {
    return (
      <View
        style={{
          width: window.width,
          height: window.height,
          backgroundColor: appColor,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <View style={{
          width: "100%",
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 10
        }}>
          <Text
            style={{
              fontSize: 50,
              fontWeight: '100',
            }}
          >
            Versiculo del día
          </Text>
          <Image
            style={
              {
                width: 100,
                height: 100
              }
            }
            source={require('./assets/icon.png')}
          />
        </View>
        <View style={{
          width: window.width / 2
        }}>
          <Text style={{fontSize: 20, textAlign: 'justify'}}>
            Estad siempre gozosos.
            Orad sin cesar.
            Dad gracias en todo, porque esta es la voluntad de Dios para con vosotros en Cristo Jesús.
          </Text>
          <Text style={{fontSize: 15, fontWeight: '100', textAlign: 'right'}}>1ª Tesalonicenses 5:16-18</Text>
        </View>
        <View>
          {
            musics.map((music, index) =>
              <View key={index}
                style={{display: 'flex',
                flexDirection: index % 2 == 0 ? 'row-reverse' : 'row',
                justifyContent:'flex-start',
                alignItems: 'center',
                width: window.width,
                paddingHorizontal: 15
              }}
              >
                <Image
                  source={music.image}
                  style={{
                    width: 100,
                    height: 100,
                    borderRadius: 50
                  }}
                />
                <View
                  style={
                    {flexDirection: 'row',
                    backgroundColor: 'rgba(255,255,255,0.2)',
                    paddingVertical: 10,
                    width: '80%',
                    paddingLeft: 15,
                    justifyContent: 'center'
                  }}
                >
                  <Text style={{fontWeight: '100', marginRight: 15}}>{music.name}</Text>
                  <Text style={{fontWeight: 'bold'}}>{music.author}</Text>
                </View>
              </View>
            )
          }
        </View>
      </View>
    )
  }
}