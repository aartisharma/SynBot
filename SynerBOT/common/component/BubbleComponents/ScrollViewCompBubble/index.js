import React from 'react';
import {StyleSheet, Image, View, TouchableOpacity, TextInput,Text,FlatList, ScrollView,Linking} from 'react-native';
import rightArrow from '../../../../common/images/rightArrow.png'
import linkedinIcon from '../../../../common/images/linkedinIcon.jpg'
import userIcon from '../../../../common/images/userIcon.png'

const ScrollViewCompBubble = ({item}) => {
const WIDTH = 300
    return (
        item.content.answer.length>0?
            item.content.answer[0].employee_details.length?
            <View style = {styles.receiverBubbleBackgroundContainerStyle}>
                <View style={{
                    flexDirection: 'row',
                    marginTop: 10
                }}>
                    <View style={styles.receiverBubbleContainerStyle}>
                         <View>
                                        <View style = {{ flex: -1,
                                            marginLeft: 0,
                                            marginRight: 0,
                                            marginBottom:0,
                                            height:100,
                                            justifyContent: 'space-between',
                                            padding: 0.05,
                                            flexDirection:'row'
                                        }}
                                        >
                                            <ScrollView horizontal = {true}
                                                       automaticallyAdjustInsets={false}
                                                        snapToAlignment="center"
                                                        contentOffset={{x:(WIDTH * (item.content.answer[0].employee_details.length - 1))-30, y:0}}
                                             >

                                                {
                                                    item.content.answer[0].employee_details.map(( value, key ) =>
                                                        (
                                                            <View style={{width:WIDTH, alignItems:'center', justifyContent:'center'}}>
                                                            <View style={{ backgroundColor:'white',borderWidth: 1, borderColor:'#F8E71C',width:WIDTH-10,height:'80%',overflow: 'hidden'}}>

                                                                <View style={{width:'100%',flexDirection:'row'}}>
                                                                    <TouchableOpacity style={{fontSize:15,fontWeight:'bold',paddingLeft:10,paddingTop:10}} onPress={() => Linking.openURL(value[1])}>
                                                                        <Image
                                                                            style={{width:20,height:20}}
                                                                            source={linkedinIcon}
                                                                        />
                                                                    </TouchableOpacity>
                                                                    <Text style={{fontSize:15,fontWeight:'bold',paddingLeft:10,paddingTop:10}}>{value[0]}</Text>

                                                                </View>
                                                                <Text style={{fontSize:13,fontWeight:'bold',paddingLeft:10,paddingTop:10,color:"#148CFF"}}
                                                                      onPress={() => Linking.openURL(value[1])}>
                                                                    {value[1]}
                                                                </Text>

                                                            </View>
                                                            </View>
                                                        ))
                                                }
                                                <TouchableOpacity style={{width:30,height:30, paddingTop:'0.8%'}}>
                                                    <Image
                                                        style={{width:28,height:'10%'}}
                                                    source = {rightArrow}
                                                    />

                                                </TouchableOpacity>
                                            </ScrollView>

                                        </View>
                                    </View>
                    </View>
                </View>
            </View>:null:null
    )
}

const styles = StyleSheet.create({
    receiverBubbleBackgroundContainerStyle:{
        top: 0,
        left: 0,
        width: '100%',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
       // backgroundColor: '#f7f7f7',
    },
    receiverBubbleContainerStyle:{
        flex: -1,
        marginLeft: 0,
        marginRight: 0,
        justifyContent:'center',
       // backgroundColor: '#F8E71C',
        //borderRadius: 20,
        // padding: 10
    }
});
export default ScrollViewCompBubble;