import React from 'react';
import {StyleSheet, Image, View, TouchableOpacity, TextInput,Text,FlatList,KeyboardAvoidingView} from 'react-native';
import Bubble from '../../../common/component/Bubble'
import ChatTextInput from '../../container/ChatTextInput'

const SpeechScreen = (props) => {

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior="padding"
        >
        <View style = {styles.backgroundStyle}>
            <View style = {styles.chatContainerStyle}>
                <FlatList style = {{width:'100%',height:'75%', backgroundColor:'#f7f7f7'}}
                          inverted
                          data={props.message}
                          renderItem={({item}) =>
                              <Bubble
                                  item = {item}
                                  props = {this.props}
                                  suggestSiblingAction = {props.suggestSiblingAction}
                              />
                          }/>
            </View>

            <View style = {styles.messageContainerStyle}>
                <ChatTextInput/>
            </View>
        </View>
        </KeyboardAvoidingView>
    );

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#4c69a5',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    backgroundStyle: {
        flex: 1,
        width:'100%',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor:'#f7f7f7',
        justifyContent: 'space-between',

    },
    chatContainerStyle: {
        height:'88%',
        width:'100%',
        backgroundColor:'#f7f7f7'
    },
    messageContainerStyle:{
        height:'10%',
        width:'100%',
        backgroundColor:'white',
        alignItems:'center',
        flexDirection: 'row',
        paddingLeft:10

    },
    messageTextFieldStyle:{
       // flex:1,
        height:'65%',
        width:'80%',
        fontSize:15,
        paddingRight:10,
        backgroundColor:'#f7f7f7',
        paddingLeft:5
    },
    sendButtonStyle:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height:'100%',
        width:'30%',
        backgroundColor:'white',
    },
    sendButtonTextStyle:{
        color:'blue',
        fontSize:18
    },
    sendButtonImage:{
        width:'70%',
        height:'70%',
        backgroundColor:'white'
    }
});
export default SpeechScreen;