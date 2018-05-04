import {createReducer} from '../util';
import Constant from '../constant';

const initialState = {
    speechResult: [],
    message:[],
    receivedData:"",
    audioSpeech: [],
    isVoiceListening:false,
    isTyping:false
};

export default createReducer(initialState, {
    [Constant.SPEECH_FILTERED_KEYWORDS]: (state, payload) => Object.assign({}, state, {
        speechResult: payload.speechResult,
        message:payload.message,
        }),
    [Constant.CHAT_RECEIVED_DATA]: (state, payload) => Object.assign({}, state, {
        receivedData:payload.receivedData
    }),
    [Constant.RECEIVED_SPEECH]: (state, payload) => Object.assign({}, state, {
        audioSpeech:payload,
        isVoiceListening:payload.isVoiceListening,
        isTyping:payload.isTyping
    }),
    [Constant.LISTENING_VOICE]: (state, payload) => Object.assign({}, state, {
        //isVoiceListening:payload.isVoiceListening
    })
});
