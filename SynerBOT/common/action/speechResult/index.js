import Constant from "../../constant";
import _ from 'lodash';
import {sendMessage} from '../../../common/service'
import { getConversationData, saveConversationData } from '../../db';
import ChatBotLocalStorage from '../../../common/ChatBotLocalStorage'
import {ConversationDetail} from "../../schema";
import Realm from "realm";
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
                   // dispatch({type: Constant.USER_INFO_ERROR, payload: null});
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
            saveConversationData(messageArray).then(()=>
            {
                console.log("data saved")
                getConversationData().then(userData=>{
                    if(userData){
                            dispatch({
                                type: Constant.SPEECH_FILTERED_KEYWORDS,
                                payload: {
                                    message: messageArray
                                }
                            });

                    }else{
                        console.log("error");
                    }
                });

            });

        /*    ChatBotLocalStorage.setConversationList(messageArray).then((result) =>{
            console.log("hello" +result)
            });
            ChatBotLocalStorage.getConversationList().then((userData)=>{
                dispatch({
                    type: Constant.SPEECH_FILTERED_KEYWORDS,
                    payload: {
                        message: userData
                    }
                });
            })
            */
        }


        //console.log(object);
       /* if (object) {
            dispatch({
                type: Constant.SPEECH_FILTERED_KEYWORDS,
                payload: {
                    message: messageArray
                }
            });
        }
        */
    }
}

export const updateMessageContainer = (object,messageArray) => {
    return (dispatch, getState) => {
        /*getConversationData().then(userData=>{
            if(userData){
                dispatch({
                    type: Constant.SPEECH_FILTERED_KEYWORDS,
                    payload: {
                        message: messageArray
                    }
                });

            }else{
                console.log("error");
            }
        });
*/
        //Filter predefined keywords from question asked.
        var result = getState().speechResults.message
        console.log(result)
        if(object)
        messageArray.unshift(object)
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

export const onListeningStart = () =>{
    return(dispatch,getState) =>{
            dispatch({
                type: Constant.RECEIVED_SPEECH,
                payload: {
                   // audioSpeech: value [0],
                    isVoiceListening:true
                }
            });


    }
}

export const onListeningStop = () =>{
    return(dispatch,getState) =>{

            dispatch({
                type: Constant.RECEIVED_SPEECH,
                payload: {
                    isVoiceListening:false
                }
            });
    }
}

export const filterKeywordsfromSearchText = (text, searchWords) => {
    return dispatch => {
        //Filter predefined keywords from question asked.

        var filteredArray = [];
        const filteredList = searchWords.filter((item) => {
            const result = (text.toLowerCase()).includes(item.toLowerCase())
            if (result) {
                filteredArray.push(item)
            }
        })
        return (filteredArray)
    }
}

