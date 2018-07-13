import React from 'react';
import {StyleSheet, View,TouchableOpacity} from 'react-native';
import Video from 'react-native-video';
import videoURL from '../../../common/images/background.mp4'
const VideoScreenComponent = (props) => {


    function onVideoLoadPreview (player){
        if(player) {
            console.log('----->>> Got player reference')
            player.seek(92,0)
        }
        else{
            console.log('failed')
        }
    }

    function onLoadVideo(playerObj) {
        console.log(playerObj)

    }

    return (
        <View style = {{flex:1}}>
            {/*<Video source={videoURL} */}
            <Video source={{uri: props.videoItem.url}}
            // Can be a URL or a local file.
                   ref={(ref) => {
                       props.player = ref
                       onVideoLoadPreview(ref)
                   }}  // Store reference
                   onBuffer={this.onBuffer}                // Callback when remote video is buffering
                   onEnd={this.onEnd}
                   onLoad={onLoadVideo(this)}// Callback when playback finishes
                   onError={this.videoError}// Callback when video cannot be loaded
                   onFullscreenPlayerWillPresent={this.fullScreenPlayerWillPresent} // Callback before fullscreen starts
                   onFullscreenPlayerDidPresent={this.fullScreenPlayerDidPresent}   // Callback after fullscreen started
                   onFullscreenPlayerWillDismiss={this.fullScreenPlayerWillDismiss} // Callback before fullscreen stops
                   onFullscreenPlayerDidDismiss={this.fullScreenPlayerDidDismiss}  // Callback after fullscreen stopped
                   style={styles.backgroundVideo} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },

});
export default VideoScreenComponent;

