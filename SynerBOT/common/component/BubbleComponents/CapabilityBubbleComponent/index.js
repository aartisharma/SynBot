import React from 'react';
import {Linking, StyleSheet, Text, View, TouchableOpacity,Image,FlatList} from 'react-native';
import docxIcon from "../../../../common/images/docxIcon.png";
import HTMLView from 'react-native-htmlview';
//var HTMLView = require('react-native-htmlview');
import bubbleStyle from "../../../../common/style";
import _ from 'lodash';
import CapabilityDetailedcomp from "../../../../common/component/BubbleComponents/CapabilityDetailedcomp"
import CapabilityBlogComponent from "../../../../common/component/BubbleComponents/CapabilityBlogComponent"
import ButtonCompBubble from "../../../../common/component/BubbleComponents/ButtonCompBubble"
const CapabilityBubbleComponent = ({item,suggestSiblingAction}) => {
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
                            {
                                item.content.answer.length > 0 ?

                                    <View style={{
                                        flexDirection: 'column',
                                        backgroundColor: 'white',
                                        borderBottomLeftRadius: 19,
                                        borderBottomRightRadius: 19
                                    }}>
                                        {
                                            item.content.answer.map((data) => {
                                                return (
                                                    <View>
                                                        <View style={{
                                                            paddingLeft: 10,
                                                            height: 1,
                                                            backgroundColor: 'white'
                                                        }}>
                                                        </View>
                                                        <View style={{paddingLeft: 10, paddingTop: 10}}>
                                                            <Text style={{fontWeight: 'bold'}}>{data[0].type}</Text>
                                                        </View>
                                                        {

                                                            data[0].type.toLowerCase() == 'experience reports' ?
                                                                <FlatList style={{
                                                                    width: '100%',
                                                                    backgroundColor: 'white',
                                                                    borderBottomLeftRadius: 19,
                                                                    borderBottomRightRadius: 19,
                                                                    margin: 1
                                                                }}
                                                                          data={data}
                                                                          renderItem={({item}) =>
                                                                              <CapabilityDetailedcomp
                                                                                  item={item}/>
                                                                          }/> :
                                                                <FlatList style={{
                                                                    width: '100%',
                                                                    backgroundColor: 'white',
                                                                    borderBottomLeftRadius: 19,
                                                                    borderBottomRightRadius: 19,
                                                                    margin: 1
                                                                }}
                                                                                          data={data}
                                                                                          renderItem={({item}) =>
                                                                                              <CapabilityBlogComponent
                                                                                                  item={item}/>
                                                                                          }/>

                                                        }

                                                    </View>
                                                )
                                            })
                                        }

                                    </View>:null
                            }
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
        borderWidth:1,
        borderColor:'#F8E71C',
        borderRadius: 20,
        padding: 1
    }
});
export default CapabilityBubbleComponent;