import React from 'react';
import {Image, Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import linkedinIcon from '../../../../common/images/linkedinIcon.jpg'

const ScrollViewCompBubble = ({item}) => {
    const WIDTH = 300
    return (
        item.content.answer.length > 0 ?
            item.content.answer[0].employee_details.length ?
                <View style={styles.receiverBubbleBackgroundContainerStyle}>

                    <ScrollView horizontal={true}
                                automaticallyAdjustInsets={false}
                                snapToAlignment="center"
                                contentOffset={{
                                    x: (WIDTH * (item.content.answer[0].employee_details.length - 1)) - 30,
                                    y: 0
                                }}
                    >
   {
                            item.content.answer[0].employee_details.map((value, key) =>
                                (
                                    <View style={styles.scrollViewCardsStyle}>
                                        <View style={styles.cardTopSectionStyle}>
                                            <TouchableOpacity style={styles.linkedinButtonStyle}
                                                              onPress={() => Linking.openURL(value[1])}>
                                                <Image
                                                    style={{width: 20, height: 20}}
                                                    source={linkedinIcon}
                                                />
                                            </TouchableOpacity>
                                            <Text style={styles.nameTextStyle}>{value[0]}</Text>

                                        </View>
                                        <Text style={styles.linkedinUrlTextStyle}
                                              onPress={() => Linking.openURL(value[1])}>
                                            {value[1]}
                                        </Text>

                                    </View>
                                ))
                        }
                    </ScrollView>
                </View> : null : null
    )
}

const styles = StyleSheet.create({
    receiverBubbleBackgroundContainerStyle: {
        top: 0,
        left: 0,
        width: '100%',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        marginTop: 10,
        height: 100,
    },
    scrollViewCardsStyle: {
        margin: 5,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#F8E71C',
        width: 290,
        height: 90,
        overflow: 'hidden'
    },
    cardTopSectionStyle: {
        width: '100%',
        flexDirection: 'row'
    },
    linkedinButtonStyle: {
        fontSize: 15,
        fontWeight: 'bold',
        paddingLeft: 10,
        paddingTop: 10
    },
    nameTextStyle: {
        fontSize: 15,
        fontWeight: 'bold',
        paddingLeft: 10,
        paddingTop: 10
    },
    linkedinUrlTextStyle: {
        fontSize: 13,
        fontWeight: 'bold',
        paddingLeft: 10,
        paddingTop: 10,
        color: "#148CFF"
    }

});
export default ScrollViewCompBubble;