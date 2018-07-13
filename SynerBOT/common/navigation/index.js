import {StackNavigator} from 'react-navigation';
import SpeechScreen from '../../mobile/container/SpeechScreen';
import LoginScreen from '../../mobile/container/LoginScreen';
import VideoScreenContainer from '../../mobile/container/VideoScreenContainer';

const InitialStack = StackNavigator({
    login: {
        screen: LoginScreen,
        navigationOptions: () => ({
            title: `SynerBOT `,
            headerBackTitle: `Login`
        }),
    },
    speech: {
        screen: SpeechScreen,
        navigationOptions: () => ({
            title: `May I Help You ! `,
            headerBackTitle: `Back`
        }),
    },
    video: {
        screen: VideoScreenContainer,
        navigationOptions: () => ({
            title: `Video `,
            headerBackTitle:null
        }),

    },

}, {headerMode: 'float'});

export default InitialStack;