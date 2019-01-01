import React from 'react';
import FirstComponent from '../components/FirstComponent';
import SecondComponent from '../components/SecondComponent';
import {Actions,Scene} from 'react-native-router-flux'

export const Navigation = Actions.create(
    <Scene key='root'>
        <Scene key='first' component={FirstComponent} hideNavBar ></Scene>
        <Scene key='second' component={SecondComponent} hideNavBar></Scene>
    </Scene>
);