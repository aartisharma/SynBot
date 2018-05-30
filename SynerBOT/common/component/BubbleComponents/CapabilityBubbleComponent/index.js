import React from 'react';
import {StyleSheet, Text, View,FlatList} from 'react-native';
import CapabilityDetailedcomp from "../../../../common/component/BubbleComponents/CapabilityDetailedcomp"
const CapabilityBubbleComponent = ({item,suggestSiblingAction}) => {
    return (

        <View style={styles.receiverBubbleBackgroundContainerStyle}>
                            <View style={{padding:10,width:'100%'}}>
                                <Text>{item.content.details} </Text>
                            </View>
                            {
                                item.content.answer.length > 0 ?

                                    <View style={{
                                        flexDirection: 'column',
                                        backgroundColor: 'white',
                                        borderBottomLeftRadius: 19,
                                        borderBottomRightRadius: 19,
                                        width:'100%'
                                    }}>
                                        {
                                            item.content.answer.map((data, index) => {
                                                return (
                                                    <View>
                                                        <View style={{
                                                            paddingLeft: 10,
                                                            height: 1,
                                                            backgroundColor: 'white'
                                                        }}>
                                                        </View>
                                                        <View style={{ width: '100%',paddingLeft: 10, paddingTop: 10}}>
                                                            <Text style={{fontWeight: 'bold'}}>{data[0].type}</Text>
                                                        </View>
                                                        <FlatList style={{
                                                                    width: '99%',
                                                                    backgroundColor: 'white',
                                                                    borderBottomLeftRadius: 19,
                                                                    borderBottomRightRadius: 19,
                                                                    margin: 1
                                                                }}
                                                                            listKey = {index}
                                                                          data={data}
                                                                          renderItem={({item}) =>
                                                                              <CapabilityDetailedcomp
                                                                                  item={item}/>
                                                                          }/>
                                                    </View>
                                                )
                                            })
                                        }

                                    </View>:null
                            }
                        </View>
            )
}

const styles = StyleSheet.create({
    receiverBubbleBackgroundContainerStyle: {
        top: 0,
        left: 0,
        width: '90%',
        alignItems: 'flex-start',
        justifyContent: 'center',
        backgroundColor: '#F8E71C',
        marginTop: 10,
        marginLeft: 5,
        marginRight: 5,
        borderWidth:1,
        borderColor:'#F8E71C',
        borderRadius: 20,
        padding: 1
 },
});
export default CapabilityBubbleComponent;