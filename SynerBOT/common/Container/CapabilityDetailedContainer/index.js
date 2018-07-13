import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import CapabilityDetailedcomp from '../../../common/component/BubbleComponents/CapabilityDetailedcomp'
import VideoScreenComponent from '../../../mobile/component/VideoScreenComponent'
import * as speechResultsActionCreator from '../../../common/action/speechResult';

class CapabilityDetailedContainer extends React.Component {

    constructor(props) {
        super(props);
        this.openVideo = this.openVideo.bind(this)
    }

    openVideo(item){

    console.log('value is', item)
        this.props.speechResultsAction.onSelectVideo(item);
        this.props.navigation.navigate('video')
}

    render() {
        return(
            <CapabilityDetailedcomp
                item = {this.props.item}
                openVideo = {this.openVideo}
            />
        )
    }
}

const mapStateToProps = state => (
    {
        speechResults: state.speechResults,
    });

const mapDispatchToProps = dispatch => ({
    dispatch,
    speechResultsAction: bindActionCreators(speechResultsActionCreator, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(CapabilityDetailedContainer);