import React from 'react';
import {Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import synLogo from '../../../common/images/syn-logo.png';

const LoginScreenComp = (props) => {
    const onUserNameChanged = props.onUserNameChanged;
    const onEmailIdChanged = props.onEmailIdChanged;
    const onLoginDone = props.onLoginDone;

    return (
        <View style={styles.backgroundStyle}>
            <Image
                source={synLogo}
                style={styles.logoImageStyle}
            />
            <View style={styles.loginContainerStyle}>
                <View style={styles.loginContainerHeaderStyle}>
                    <Text style={{color: 'black', fontSize: 18, fontWeight: '400'}}>User Information</Text>
                </View>
                <View style={styles.loginContainerViewStyle}>
                    <TextInput
                        style={styles.loginTextFieldsStyle}
                        placeholder='Name'
                        autoCapitalize='none'
                        autoCorrect = {false}
                        onChangeText={value => onUserNameChanged(value)}
                        value={props.username}
                    />
                    <TextInput
                        style={styles.loginTextFieldsStyle}
                        placeholder='Email Address'
                        autoCapitalize='none'
                        autoCorrect = {false}
                        onChangeText={value => onEmailIdChanged(value)}
                        value={props.emailId}
                    />
                    {
                        // Activity indicator visible on request to login api.
                        props.loading ?
                            <Spinner size ="small"/>:
                            <TouchableOpacity
                                style={styles.loginButtonStyle}
                                onPress={onLoginDone}>
                                <Text style={{fontSize: 16, color: 'black'}}>Start Chat</Text>
                            </TouchableOpacity>
                    }
                </View>
            </View>
            <View style={styles.errorContainerStyle}>
                <Text style={styles.errorTextStyle}>
                    {props.error}
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: '#fafafd',
        flex: 1,
        alignItems: 'center',
        paddingTop: '15%'
    },
    logoImageStyle: {
        width: '60%',
        height: 60,
        resizeMode: 'contain',
        marginTop: 40
    },
    errorTextStyle: {
        fontSize: 15,
        alignSelf: 'center',
        color: 'red'
    },
    loginContainerHeaderStyle: {
        height: 45,
        width: '100%',
        alignItems: 'center', //'flex-start',
        justifyContent: 'center',
        backgroundColor: '#F8E71C',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5
    },
    loginContainerViewStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    loginTextFieldsStyle: {
        backgroundColor: '#EFEFEF',
        width: '70%',
        height: 35,
        borderRadius: 4,
        fontSize: 15,
        paddingLeft: 10
    },
    loginButtonStyle: {
        width: '50%',
        backgroundColor: '#F8E71C',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4
    },
    loginContainerStyle: {
        height: '38%',
        width: '85%',
        backgroundColor: '#fff',
        borderRadius: 5,
        shadowRadius: 5,
        shadowColor: 'gray',
        shadowOpacity: 0.3,
        shadowOffset: {x: 0, y: 5},
        marginTop: 30
    },
    errorContainerStyle: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30
    }
});
export default LoginScreenComp;

