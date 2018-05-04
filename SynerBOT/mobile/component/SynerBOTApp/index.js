import React from 'react';
import {Image, View} from 'react-native';
import {Provider} from 'react-redux';
import configureStore from '../../store/configureStore';
import AppContainer from '../../container/AppContainer';

const store = configureStore();
console.disableYellowBox = true;
const SynerBotApp = () =>
    <View style={{flex: 1}}>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </View>;

export default SynerBotApp;