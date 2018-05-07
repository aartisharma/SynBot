import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const ButtonCompBubble = ({item,suggestSiblingAction}) => {
    return (
        <View style={styles.receiverBubbleBackgroundContainerStyle}>
            <View style={styles.receiverBubbleContainerStyle}>
                <Text style={{fontSize: 14, margin: 8}}>{item.content.answer}</Text>
                <TouchableOpacity style={styles.suggestSiblingButtonStyle}
                                  onPress={() => suggestSiblingAction(item)}>
                    <Text style={{fontSize: 16, color: '#148CFF'}}>Yes</Text>
                </TouchableOpacity>

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
        flexDirection: 'row',
        marginTop: 10
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
    suggestSiblingButtonStyle:{
        height: 37,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomRightRadius: 17,
        borderBottomLeftRadius: 17,
        borderWidth: 1,
        borderColor: '#F8E71C'
    }
});
export default ButtonCompBubble;