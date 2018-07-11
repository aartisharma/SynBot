import React from 'react';
import {StyleSheet, View, TextInput,Text,TouchableOpacity,Image} from 'react-native';

import ScrollViewCompBubble from '../../../common/component/BubbleComponents/ScrollViewCompBubble';
import ButtonCompBubble from '../../../common/component/BubbleComponents/ButtonCompBubble';
import SingleLineCompBubble from '../../../common/component/BubbleComponents/SingleLineCompBubble';
import CapabilityBubbleComponent from '../../../common/component/BubbleComponents/CapabilityBubbleComponent';
import AreaCapabilityBubbleComponent from '../../../common/component/BubbleComponents/AreaCapabilityBubbleComponent';
import DefaultBubble from '../../../common/component/BubbleComponents/DefaultBubble';
import editButton from '../../../common/images/edit.png';

const Bubble = ({item,suggestSiblingAction,onEditQuestionSent, navigation}) => {
    return (
        item.userID == 1?
          <View>
                {
                    item.content.intent == "definition"?
                        item.content.response_code == "ontology_response_code" ||item.content.response_code == "not_recognized_code" ?
                            <SingleLineCompBubble
                                item = {item}/> :<DefaultBubble item = {item}/> :
                        item.content.intent =="buttonComponent"?
                            <ButtonCompBubble
                                item = {item}/>:
                            item.content.intent =="developer_count"?
                                <View>
                                    <View style = {styles.receiverBubbleBackgroundContainerStyle}>
                                        <View style={{
                                            flexDirection: 'row',
                                            marginTop: 10
                                        }}>
                                            <View style={styles.receiverBubbleContainerStyle}>
                                                <Text style={{fontSize: 14, margin:8}}>
                                                    {item.content.details}
                                                </Text>
                                            </View>
                                        </View>
                                    </View>
                                   <ScrollViewCompBubble
                                item = {item}/>
                                </View>
                                : item.content.intent =="capability"||item.content.intent =="expertise_capability"?
                                        item.content.response_code =="suggest_sibling_code"?
                                        <ButtonCompBubble item = {item}
                                                          suggestSiblingAction = {suggestSiblingAction}/>
                                       :<CapabilityBubbleComponent
                                            item = {item}
                                            suggestSiblingAction = {suggestSiblingAction}
                                            navigation={navigation}/>
                                        :item.content.intent == "area_capability"||item.content.intent == "comparison"?
                                    <AreaCapabilityBubbleComponent
                                        item = {item}/>:null
                }
            </View>
              :
            <View style={styles.senderBubbleBackgroundContainerStyle}>
                <View style={{
                    flexDirection: 'row',
                    marginTop: 10
                }}>
                    <View style={styles.senderBubbleContainerStyle}>
                        {
                            item.content.intent == "definition"?

                                <Text style={{fontSize: 14}}>
                                    {item.content.answer}
                                </Text> :
                                null
                        }
                    </View>
                    <View style={{ flex: -1,
                        justifyContent:'center'}}>
                        <TouchableOpacity onPress={() => onEditQuestionSent(item.content.answer)}>
                            {/*<Image style={{width:20,height:20}}*/}
                                   {/*source={editButton}*/}
                            {/*/>*/}
                            <Text style = {{fontSize:25,color:'#007aff',transform: [{ rotate: '90deg'}]}}>&#9998;</Text>
                            </TouchableOpacity>
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
    },
    senderBubbleContainerStyle:{
        flex: -1,
        marginLeft: 5,
        marginRight: 5,
        justifyContent:'center',
        backgroundColor: '#ececec',
        borderRadius: 20,
        padding: 10,
    }
});
export default Bubble;