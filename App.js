import React from 'react';

import ChargingPage from './ChargingPage';

import AppRoutes from './routes';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  async componentDidMount() {
    setTimeout(() => {
      this.setState({ isReady: true })
    }, 2000)
  }

  render() {
    if (!this.state.isReady) {
      return <ChargingPage />;
    }

    return (
      <AppRoutes />
    );
  }
}

