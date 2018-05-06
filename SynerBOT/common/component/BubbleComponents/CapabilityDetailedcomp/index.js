import React from 'react';
import {StyleSheet, Image, View, TouchableOpacity, Text, Linking} from 'react-native';
import docxIcon from "../../../../common/images/docxIcon.png";
import explorerIcon from "../../../../common/images/chrome.png";


const CapabilityDetailedcomp = ({item}) => {
    return (
        <View style = {styles.receiverCapabilityDetailedcompContainerStyle}>
            <TouchableOpacity style={styles.docxIconStyle} onPress={() => Linking.openURL(item.url)}>
                <Image style={{width:35,height:35}} source={ item.type.toLowerCase() == 'experience reports'?docxIcon:explorerIcon} />
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
    receiverCapabilityDetailedcompContainerStyle:{
        flexDirection: 'row',
        backgroundColor:'white',
        borderBottomLeftRadius:19,
        borderBottomRightRadius:19,
        padding:1
    },
    docxIconStyle:{
        fontSize:15,
        fontWeight:'bold',
        paddingLeft:10,
        paddingTop:10
    },
    fileNameTextStyle:{
        color: '#148CFF',
        padding:8,
        backgroundColor:'transparent',
        flex: 1,
        flexWrap: 'wrap',
        justifyContent:'center',
        alignSelf:'center'
    }

});
export default CapabilityDetailedcomp;