import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import VideoScreenComponent from '../../component/VideoScreenComponent'
import * as speechResultsActionCreator from '../../../common/action/speechResult';
import speechResult from "../../../common/reducer/speechResult";
class VideoScreenContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            player:{},
        }
       }

    componentWillReceiveProps(nextProps) {

    }

    componentDidMount()
    {

    }


    render() {
        return(
            <VideoScreenComponent
                videoItem = {this.props.speechResults.selectedVideo.videoItem}
                player = {this.state.player}
            />
        )
    }
}
const mapStateToProps = state => (
    {
        speechResults: state.speechResults
    });

const mapDispatchToProps = dispatch => ({
    dispatch,
    speechResultsAction: bindActionCreators(speechResultsActionCreator, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(VideoScreenContainer);