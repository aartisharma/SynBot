import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

const AreaCapabilityBubbleComponent = ({item}) => {
    return (
        <View style={styles.receiverBubbleBackgroundContainerStyle}>
            <View style={{
                flexDirection: 'row',
                marginTop: 10
            }}>
                <View style={styles.receiverBubbleContainerStyle}>
                    <View style={{padding:10}}>
                        <Text>{item.content.details} </Text>
                    </View>
                    <FlatList style={styles.projectsFlatListStyle}
                              data={item.content.answer.projects}
                              renderItem={({item}) =>
                                  <View>
                                      <Text style={{color: 'black', padding:15,backgroundColor:'transparent',flex: 1, flexWrap: 'wrap'}}>
                                          {item}</Text>
                                  </View>

                              }/>
                    </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    receiverBubbleBackgroundContainerStyle: {
        top: 0,
        left: 0,
        width: '90%',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        backgroundColor: '#f7f7f7',
    },

    receiverBubbleContainerStyle: {
        flex: -1,
        marginLeft: 5,
        marginRight: 5,
        justifyContent: 'center',
        backgroundColor: '#F8E71C',
        borderWidth: 1,
        borderColor: '#F8E71C',
        borderRadius: 20,
        padding: 1
    },
    projectsFlatListStyle: {
        width: '100%',
        backgroundColor: '#f7f7f7',
        borderBottomLeftRadius: 19,
        borderBottomRightRadius: 19
    }
});
export default AreaCapabilityBubbleComponent;