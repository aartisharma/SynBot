import {StackNavigator} from 'react-navigation';
import SpeechScreen from '../../mobile/container/SpeechScreen';
import LoginScreen from '../../mobile/container/LoginScreen';
import VideoScreenContainer from '../../mobile/container/VideoScreenContainer';

const InitialStack = StackNavigator({
    login: {
        screen: LoginScreen
    },
    speech: {
        screen: SpeechScreen
    },
    video:{
        screen:VideoScreenContainer
    }

},);

export default InitialStack;
