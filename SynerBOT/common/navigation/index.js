import {StackNavigator} from 'react-navigation';
import SpeechScreen from '../../mobile/container/SpeechScreen';
import LoginScreen from '../../mobile/container/LoginScreen';

const InitialStack = StackNavigator({
    login: {
        screen: LoginScreen
    },
    speech: {
        screen: SpeechScreen
    },

}, {headerMode: 'none'});

export default InitialStack;
