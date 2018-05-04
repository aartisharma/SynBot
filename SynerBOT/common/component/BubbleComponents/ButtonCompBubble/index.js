import React from 'react';
import {StyleSheet, Image, View, TouchableOpacity, TextInput, Text, FlatList, ScrollView, Linking} from 'react-native';

const ButtonCompBubble = ({item,suggestSiblingAction}) => {
    return (
            <View style = {styles.receiverBubbleBackgroundContainerStyle}>
                <View style={{
                    flexDirection: 'row',
                    marginTop: 10
                }}>
                    <View style={styles.receiverBubbleContainerStyle}>
                        <View>
                                        <Text style={{fontSize: 14,margin:8}}>{item.content.answer}</Text>
                                        <View style = {{ flex: -1,
                                            marginLeft: 1,
                                            marginRight: 1,
                                            marginBottom:2,
                                            justifyContent: 'space-between',
                                            padding: 1}}>
                                            <TouchableOpacity style={{height:37,backgroundColor:'white', justifyContent: 'center',alignItems:'center', borderBottomRightRadius:17,
                                                borderBottomLeftRadius:17}} onPress={() => suggestSiblingAction(item)}><Text  style = {{fontSize:16,color:'#148CFF'}}>Yes</Text></TouchableOpacity>

                                        </View>
                                    </View>
                    </View>
                </View>
            </View>

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
export default ButtonCompBubble;