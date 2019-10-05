import React from 'react';
import { AppLoading } from 'expo';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

import ChargingPage from './ChargingPage';

const appColor = "#ffc917";

class AnatomyExample extends React.Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Holy Music</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Text>
            Holy Music
          </Text>
        </Content>
      </Container>
    );
  }
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true })
  }

  render() {
    if (!this.state.isReady) {
      return <ChargingPage />;
    }

    return (
      <AnatomyExample />
    );
  }
}
