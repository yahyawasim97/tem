import React, {Component} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {Provider, connect} from 'react-redux';
import { Router } from 'react-native-router-flux';
import {store,persistor} from './config/store';
import { PersistGate } from 'redux-persist/integration/react'
import {Navigation} from './navigation/Navigation';


const ConnectedRouter = connect()(Router);


export default class App extends Component {
    componentDidMount(){
      setTimeout(() => SplashScreen.hide() , 1000);
    }

  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ConnectedRouter scenes={Navigation} />
        </PersistGate>
      </Provider>
    );
  }
}

