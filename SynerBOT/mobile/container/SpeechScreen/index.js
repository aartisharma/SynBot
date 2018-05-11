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
            keywords: ['option one','option two', 'react'],
            data: [],
            text: '',
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
            },
            recognized: '',
            pitch: '',
            error: '',
            end: '',
            started: '',
            results: [],
            partialResults: [],
            isListening:false,
            isTyping:false
        }

        this.onMessageChange = this.onMessageChange.bind(this);
        this.onPressAnyWhere = this.onPressAnyWhere.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onTextInputFocus = this.onTextInputFocus.bind(this);
        this.onSend = this.onSend.bind(this);
        this.onVoiceStart = this.onVoiceStart.bind(this);
        this.onStartSpeech = this.onStartSpeech.bind(this);
        this.suggestSiblingAction = this.suggestSiblingAction.bind(this);
        this.onEditQuestionSent = this.onEditQuestionSent.bind(this);
        Voice.onSpeechStart = this.onSpeechStart.bind(this);
        Voice.onSpeechRecognized = this.onSpeechRecognized.bind(this);
        Voice.onSpeechEnd = this.onSpeechEnd.bind(this);
        Voice.onSpeechError = this.onSpeechError.bind(this);
        Voice.onSpeechResults = this.onSpeechResults.bind(this);
        Voice.onSpeechPartialResults = this.onSpeechPartialResults.bind(this);
        Voice.onSpeechVolumeChanged = this.onSpeechVolumeChanged.bind(this);
         }

    componentWillUnmount() {
        Voice.destroy().then(Voice.removeAllListeners);
    }

    onSpeechStart(e) {
          }

    onSpeechRecognized(e) {

    }

    onSpeechEnd(e) {
        // this.props.speechResultsAction.onListeningStart()
        // this.timer = setTimeout(() => {
        //     this.props.speechResultsAction.onListeningStop()
        //     this._cancelRecognizing()
        // }, 2000);

        // console.log("speech sonu end")
        // this.setState({
        //     end: '√',
        // });
    }

    onSpeechError(e) {
        // this.setState({
        //     error: JSON.stringify(e.error),
        // });
    }

    onSpeechResults(e) {
        if(this.timer)
        {
            window.clearTimeout(this.timer);
        }
        if(this.timeoutHandle)
        {
            window.clearTimeout(this.timeoutHandle)
        }
        this.setState(()=> ({
            text: e.value[0],
        }))
        console.log(e.value)
        this.timeoutHandle = setTimeout(() => {
            this._cancelRecognizing()
           //this.props.speechResultsAction.onListeningStatusChanged(false)
             console.log("time out result" + e.value[0])
                        //Voice.stop()
                        this._cancelRecognizing()

                        this.setState({ messages:{
                                userID: 2,
                                content:
                                    {
                                        answer: this.state.text,
                                        details: "",
                                        intent: "definition",
                                        response_code: "",
                                        utterance: ""
                                    }
                            }
                        }, function() {
                           this.props.speechResultsAction.onListeningStatusChanged(false)
                             var messageArray = this.props.speechResults.message;
                            this.props.speechResultsAction.updateMessageContainer(this.state.messages, messageArray)
                            //API call
                            this.props.speechResultsAction.sendTextCall(this.state.text, messageArray);
                            this.setState(()=> ({
                                text: "",
                                isListening:this.props.speechResults.isListening
                            }))
                        });
                        // Add your logic for the transition

        }, 2000);


    }

    onSpeechPartialResults(e) {
        // this.setState({
        //     partialResults: e.value,
        // });
    }

    onSpeechVolumeChanged(e) {
        // this.setState({
        //     pitch: e.value,
        // });
    }

    async _startRecognizing(e) {
        this.setState({
            recognized: '',
            pitch: '',
            error: '',
            started: '',
            results: [],
            partialResults: [],
            end: ''
        });
        try {
            await Voice.start('en-IN');
        } catch (e) {
            console.error(e);
        }
    }

    async _stopRecognizing(e) {
        try {
            await Voice.stop();
        } catch (e) {
            console.error(e);
        }
    }

    async _cancelRecognizing(e) {
        try {
            await Voice.cancel();
        } catch (e) {
            console.error(e);
        }
    }

    async _destroyRecognizer(e) {
        try {
            await Voice.destroy();
        } catch (e) {
            console.error(e);
        }
        this.setState({
            recognized: '',
            pitch: '',
            error: '',
            started: '',
            results: [],
            partialResults: [],
            end: ''
        });
    }

    componentWillReceiveProps(nextProps) {
        if(this.props != nextProps) {
            this.setState({
                isListening:nextProps.speechResults.isVoiceListening ,
                isTyping:nextProps.speechResults.isTyping
            });
        }
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

    onMessageChange(value){
        this.setState(()=> ({
            text: value,
        }))
    }

    onTextInputFocus(value){
        this.props.speechResultsAction.onTypingStart()
    }

    suggestSiblingAction(item) {
        var messageArray = this.props.speechResults.message;
        this.props.speechResultsAction.updateMessageContainer("", messageArray)
        //API call
        this.props.speechResultsAction.sendTextCall("suggested_sibling",messageArray);
    }

    onVoiceStart(){
        if (this.state.isListening === false) {
            this.props.speechResultsAction.onListeningStatusChanged(true)
            this._startRecognizing()
        } else {
            this.props.speechResultsAction.onListeningStatusChanged(false)
                this._cancelRecognizing()
            }
      }

    onSend() {
        window.clearTimeout(this.timer);
        if(this.state.text !="") {
            this.setState({
                messages: {
                    userID: 2,
                    content:
                        {
                            answer: this.state.text,
                            details: "",
                            intent: "definition",
                            response_code: "",
                            utterance: ""
                        }
                }
            }, function () {
                var messageArray = this.props.speechResults.message;
                this.props.speechResultsAction.updateMessageContainer(this.state.messages, messageArray)
                //API call
                this.props.speechResultsAction.sendTextCall(this.state.text, messageArray);
                this.setState(() => ({
                    text: "",
                }))
            });
        }
     }

    onSubmit(){
        this.props.speechResultsAction.onTypingEnd()
    }

    onStartSpeech(){
        console.log("longPress")
     }

    onEditQuestionSent(value){
        this.setState(() => ({
            text:value,
        }))

    }

    onPressAnyWhere(){

    }
  render() {
        return(
            <SpeechScreenCompo
                text = {this.state.text}
                onMessageChange = {this.onMessageChange}
                onTextInputFocus = {this.onTextInputFocus}
                onSend ={this.onSend}
                onVoiceStart ={this.onVoiceStart}
                message = {this.props.speechResults.message}
                suggestSiblingAction = {this.suggestSiblingAction}
                onEditQuestionSent = {this.onEditQuestionSent}
                onStartSpeech = {this.onStartSpeech}
                isListening = {this.state.isListening}
                isTyping = {this.state.isTyping}
                onSubmit = {this.onSubmit}
                onPressAnyWhere={this.onPressAnyWhere}
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