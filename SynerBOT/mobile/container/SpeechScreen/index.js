import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import SpeechScreenCompo from '../../component/SpeechScreen'
import * as speechResultsActionCreator from '../../../common/action/speechResult';
import Voice from 'react-native-voice';
class SpeechScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            messages:{
                userID: 1,
                content:
                    {
                        answer: "",
                        details: "",
                        intent: "",
                        response_code: "",
                        utterance: ""
                     }
            }
        }
       this.suggestSiblingAction = this.suggestSiblingAction.bind(this);
    }

    componentDidMount()
    {
        this.props.speechResultsAction.loadPreviousMessages()
        this.timer = setTimeout(() => {
            this.setState({ messages:{
                    userID: 1,
                    content:
                        {
                            answer: "Hello! I am SynBot",
                            details: "",
                            intent: "definition",
                            response_code: "ontology_response_code",
                            utterance: ""
                         }

                }}, function() {
                // do something with new state
                var messageArray = this.props.speechResults.message;
                this.props.speechResultsAction.updateMessageContainer(this.state.messages,messageArray)

                this.timer = setTimeout(() => {
                    this.setState({ messages:{
                            userID: 1,
                            content:
                                {
                                    answer: "What can I help you with?",
                                    details: "",
                                    intent: "definition",
                                    response_code: "ontology_response_code",
                                    utterance: ""
                                   }
                        }}, function() {
                        // do something with new state
                        var messageArray = this.props.speechResults.message;
                        this.props.speechResultsAction.updateMessageContainer(this.state.messages,messageArray)
                    });
                }, 2000);

            });
        }, 5000);
      }

    suggestSiblingAction(item) {
        var messageArray = this.props.speechResults.message;
        this.props.speechResultsAction.updateMessageContainer("", messageArray)
        //API call
        this.props.speechResultsAction.sendTextCall("suggested_sibling",messageArray);
    }

  render() {
        return(
            <SpeechScreenCompo
               // onVoiceStart ={this.onVoiceStart}
                message = {this.props.speechResults.message}
                suggestSiblingAction = {this.suggestSiblingAction}
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

export default connect(mapStateToProps, mapDispatchToProps)(SpeechScreen);