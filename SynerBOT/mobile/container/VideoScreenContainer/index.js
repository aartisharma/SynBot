import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import VideoScreenComponent from '../../component/VideoScreenComponent'
import * as speechResultsActionCreator from '../../../common/action/speechResult';
class VideoScreenContainer extends React.Component {

    constructor(props) {
        super(props);

    }

    componentWillReceiveProps(nextProps) {

    }

    componentDidMount()
    {

    }

    render() {
        return(
            <VideoScreenComponent

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