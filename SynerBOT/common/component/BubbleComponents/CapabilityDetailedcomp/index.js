import React from 'react';
import {StyleSheet, Image, View, TouchableOpacity, TextInput, Text, FlatList, ScrollView, Linking} from 'react-native';
import docxIcon from "../../../../common/images/docxIcon.png";

const CapabilityDetailedcomp = ({item}) => {
    return (
        <View style = {{flexDirection: 'row', backgroundColor:'white', borderBottomLeftRadius:19,borderBottomRightRadius:19,padding:1}}>
            <TouchableOpacity style={{fontSize:15,fontWeight:'bold',paddingLeft:10,paddingTop:10}} onPress={() => Linking.openURL(item.url)}>
                <Image style={{width:35,height:35}} source={docxIcon} />
            </TouchableOpacity>
            <Text style={{color: '#148CFF', padding:8,backgroundColor:'transparent',flex: 1, flexWrap: 'wrap', justifyContent:'center',alignSelf:'center'}}>
                {item.fileName}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({

});
export default CapabilityDetailedcomp;