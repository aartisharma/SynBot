import React from 'react';
import {StyleSheet, Image, View, TouchableOpacity, TextInput,Text,FlatList,KeyboardAvoidingView} from 'react-native';
import microphone from '../../../common/images/microphone.png'
import soundWave from '../../../common/images/sound1.gif'

const ChatTextInput = (props) => {

    return (

            <View style = {styles.backgroundStyle}>
                <View style = {styles.messageContainerStyle}>
                    <TextInput
                        style = {styles.messageTextFieldStyle}
                        onChangeText={(value) => props.onMessageChange(value)}
                        onFocus={(value) => props.onTextInputFocus(value)}
                        autoCorrect = {false}
                        multiline={true}
                        value={props.text}
                        returnKeyType="done"
                        blurOnSubmit={true}
                        autoCapitalize= "none"
                        onSubmitEditing ={(value) => props.onSubmit(value)}
                    />
                    {
                        props.isTyping?
                            <TouchableOpacity style={styles.sendButtonStyle} onPress={props.onSend}
                                              onLongPress={props.onStartSpeech}>
                                <Text>Send</Text>
                            </TouchableOpacity> : props.isListening ?
                            <TouchableOpacity style={styles.sendButtonStyle} onPress={props.onVoiceStart}
                                              onLongPress={props.onStartSpeech}>
                                <Image style={styles.sendButtonImage}
                                       source={soundWave}
                                /></TouchableOpacity> :
                            <TouchableOpacity style={styles.sendButtonStyle} onPress={props.onVoiceStart}
                                              onLongPress={props.onStartSpeech}>
                                <Image style={styles.sendButtonImage}
                                       source={microphone}
                                /></TouchableOpacity>
                    }
                </View>
            </View>

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
        height:'100%',
        width:'100%',
        backgroundColor:'white',
        alignItems:'center',
        flexDirection: 'row',
        paddingLeft:10

    },
    messageTextFieldStyle:{
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
export default ChatTextInput;