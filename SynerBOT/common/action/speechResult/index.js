import Constant from "../../constant";
import {sendMessage} from '../../../common/service'
import { getConversationData, saveConversationData } from '../../db';

export const sendTextCall = (text,messageArray) => {
    return (dispatch,getState) => {
        //Hit Login Service
        sendMessage(text)
                .then(userData => {
                if (userData) {
                    dispatch({
                        type: Constant.CHAT_RECEIVED_DATA,
                        payload: {
                            receivedData: userData
                        }
                    });
                    dispatch(receivedResponseUpdateMessageContainer())
                }
                else {
                }
             })
    }
}

export const receivedResponseUpdateMessageContainer = () => {
    return (dispatch, getState) => {
        var messageArray = getState().speechResults.message
        var object = {
            userID: 1,
            content: getState().speechResults.receivedData
        }

        messageArray.unshift(object)
        if (object) {
            saveConversationData(messageArray).then(() => {
                console.log("data saved")
                getConversationData().then(userData => {
                    if (userData) {
                        messageArray = messageArray.slice(0,20)
                            dispatch({
                            type: Constant.SPEECH_FILTERED_KEYWORDS,
                            payload: {
                                message: messageArray
                            }
                        });

                    } else {
                        console.log("error");
                    }
                });

            });
        }
    }
}
export const updateMessageContainer = (object,messageArray) => {
    return (dispatch, getState) => {
        //Filter predefined keywords from question asked.
        var result = getState().speechResults.message
        console.log(result)
        if(object)
        messageArray.unshift(object)
        messageArray = messageArray.slice(0,20)
        console.log(object);
        if (object) {
            dispatch({
                type: Constant.SPEECH_FILTERED_KEYWORDS,
                payload: {
                    message: messageArray
                }
            });
        }
    }
}

export const loadPreviousMessages = () => {
    return (dispatch, getState) => {
        getConversationData().then(userData => {
            if (userData) {
                dispatch({
                    type: Constant.SPEECH_FILTERED_KEYWORDS,
                    payload: {
                        message: userData
                    }
                });

            } else {
                console.log("error");
            }
        });
    }
}

export const onTypingStart = () =>{
    return(dispatch,getState) =>{
        dispatch({
            type: Constant.RECEIVED_SPEECH,
            payload: {
                // audioSpeech: value [0],
                isTyping:true,
                isVoiceListening:false
            }
        });


    }
}

export const onTypingEnd = () =>{
    return(dispatch,getState) =>{
        dispatch({
            type: Constant.RECEIVED_SPEECH,
            payload: {
                isTyping:false,
                isVoiceListening:false
            }
        });
    }
}

export const onListeningStatusChanged = (listeningStatus) => {
        return(dispatch,getState) =>{
            dispatch({
                type: Constant.RECEIVED_SPEECH,
                payload: {
                    isVoiceListening:listeningStatus
                }
            });
        }
    }

