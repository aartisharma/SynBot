import React from 'react';
import {
    StyleSheet, Image, View, TouchableOpacity, TextInput, Text, FlatList, ScrollView, WebView,
    Linking
} from 'react-native';
import explorerIcon from "../../../../common/images/chrome.png";

const CapabilityBlogComponent = ({item}) => {
    return (
        <View style = {{flexDirection: 'row', borderBottomLeftRadius:19,borderBottomRightRadius:19,padding:1}}>
            <TouchableOpacity style={{fontSize:15,fontWeight:'bold',paddingLeft:10,paddingTop:10}} onPress={() => Linking.openURL(item.url)}>
                <Image style={{width:35,height:35}} source={explorerIcon}/>
            </TouchableOpacity>
            <TouchableOpacity style={{fontSize:15,fontWeight:'bold',paddingLeft:10,paddingTop:10, width:'85%'}} onPress={() => Linking.openURL(item.url)}>
                <Text style={{color: '#148CFF', padding:8,backgroundColor:'transparent',flex: 1,flexWrap: 'wrap'}}>
                    {item.fileName}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({

});

export default CapabilityBlogComponent;