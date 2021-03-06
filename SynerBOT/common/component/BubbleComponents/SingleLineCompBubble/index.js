import React from 'react';
import {StyleSheet, Image, View, TouchableOpacity, TextInput,Text,FlatList, ScrollView} from 'react-native';

const SingleLineCompBubble = ({item}) => {
    return (
        item.content.answer != "" && item.content.response_code != ""?
            <View style = {styles.receiverBubbleBackgroundContainerStyle}>
            <View style={{
                flexDirection: 'row',
                marginTop: 10
            }}>
                <View style={styles.receiverBubbleContainerStyle}>
                            <Text style={{fontSize: 14, margin:8}}>
                    {item.content.answer}
                        </Text>
                </View>
            </View>
        </View>:null

    )
}

const styles = StyleSheet.create({
    receiverBubbleBackgroundContainerStyle:{
        top: 0,
        left: 0,
        width: '90%',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        backgroundColor: '#f7f7f7',
    },
    senderBubbleBackgroundContainerStyle: {
        top: 0,
        left: 0,
        width: '100%',
        alignItems: 'flex-end',
        justifyContent: 'flex-start',
        backgroundColor: '#f7f7f7',
    },

    receiverBubbleContainerStyle:{
        flex: -1,
        marginLeft: 5,
        marginRight: 5,
        justifyContent:'center',
        backgroundColor: '#F8E71C',
        borderRadius: 20,
        // padding: 10
    },
    senderBubbleContainerStyle:{
        flex: -1,
        marginLeft: 5,
        marginRight: 5,
        justifyContent:'center',
        backgroundColor: '#F8E71C',
        borderRadius: 20,
        padding: 10,
    }
});
export default SingleLineCompBubble;