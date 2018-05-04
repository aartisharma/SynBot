import Constant from "../../constant";
import _ from 'lodash';
import {sendMessage} from '../../../common/service'
import { getConversationData, saveConversationData } from '../../db';
import ChatBotLocalStorage from '../../../common/ChatBotLocalStorage'
import {ConversationDetail} from "../../schema";
import Realm from "realm";
import * as EmailValidator from 'email-validator';


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


export const authenticateUser = (userId, email) => {
    return dispatch => {

        if(userId !="" && email!="")
        {
          if(! EmailValidator.validate(email)){
              dispatch({type: Constant.USER_INFO_ERROR, payload: null});
          }
          else{
              dispatch({
                                  type: Constant.USER_INFO_SUCCESS,
                                  payload: {
                                      isLoggedIn: true,
                                      userInfo: {
                                          userId: userId,
                                          emailId:email
                                      }
                                  }
                              });
          }

        }
        else{
            dispatch({
                                type: Constant.USER_INFO_SUCCESS,
                                payload: {
                                    isLoggedIn: true,
                                    userInfo: {
                                        userId: userId,
                                        emailId:email
                                    }
                                }
                            });
        }


        // //Hit Login Service
        // loginUser(userId, password)
        //     .then(userData => {
        //         if (userData['response'] == 'success') {
        //             dispatch({
        //                 type: Constant.USER_INFO_SUCCESS,
        //                 payload: {
        //                     isLoggedIn: true,
        //                     userInfo: {
        //                         userId: userId,
        //                         apiKey:userData['api-key']
        //                     }
        //                 }
        //             });
        //         }
        //         else {
        //             dispatch({type: Constant.USER_INFO_ERROR, payload: null});
        //         }
        //         console.log('Authenticated user:-', userData);
        //     })
    }
}

export const resetUI = () => {
    return dispatch => {
        dispatch({type: Constant.RESET_UI, payload: null});
    }
}
