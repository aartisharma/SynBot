import React from 'react';
import {StyleSheet, View,Text} from 'react-native';

const DefaultBubble = ({item}) => {
    return (
            <View style = {styles.receiverBubbleBackgroundContainerStyle}>
                        {
                            item.content.answer.map((data) => {
                                return(
                                    <Text style={{fontSize: 14, margin: 8}}>
                                        {data}
                                    </Text>
                                )
                            })
                        }
               </View>:null
    )
}

const styles = StyleSheet.create({
    receiverBubbleBackgroundContainerStyle:{
        top: 0,
        left: 0,
        width: '90%',
        alignItems: 'flex-start',
        justifyContent: 'center',
        backgroundColor: '#F8E71C',
        marginTop: 10,
        marginLeft: 5,
        marginRight: 5,
        borderRadius: 20

    }
});
export default DefaultBubble;