import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ChatTextInputCompo from '../../component/ChatTextInput'
import * as speechResultsActionCreator from '../../../common/action/speechResult';
import Voice from 'react-native-voice';
class ChatTextInput extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            text: '',
            isListening:false,
            isTyping:false,
            keywords: ['option one','option two', 'react'],
            data: [],
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
            partialResults: []
        }

        this.onMessageChange = this.onMessageChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onTextInputFocus = this.onTextInputFocus.bind(this);
        this.onSend = this.onSend.bind(this);
        this.onVoiceStart = this.onVoiceStart.bind(this);
        Voice.onSpeechStart = this.onSpeechStart.bind(this);
        Voice.onSpeechRecognized = this.onSpeechRecognized.bind(this);
        Voice.onSpeechEnd = this.onSpeechEnd.bind(this);
        Voice.onSpeechError = this.onSpeechError.bind(this);
        Voice.onSpeechResults = this.onSpeechResults.bind(this);
        Voice.onSpeechPartialResults = this.onSpeechPartialResults.bind(this);
        Voice.onSpeechVolumeChanged = this.onSpeechVolumeChanged.bind(this);
        }

    componentWillUnmount() {
    }

    componentWillReceiveProps(nextProps) {
        if(this.props != nextProps) {
            this.setState({
                isListening:nextProps.speechResults.isVoiceListening ,
                isTyping:nextProps.speechResults.isTyping
            });
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

    componentDidMount()
    {

    }

    onMessageChange(value){
        this.setState(()=> ({
            text: value,
        }))
    }

    onTextInputFocus(value){
        this.props.speechResultsAction.onTypingStart()
    }

    onSubmit(){
        this.props.speechResultsAction.onTypingEnd()
    }

        // Speech related methods

    onVoiceStart(){
        if (this.state.isListening === false) {
            this.props.speechResultsAction.onListeningStatusChanged(true)
            this._startRecognizing()
        } else {
            this.props.speechResultsAction.onListeningStatusChanged(false)
            this._cancelRecognizing()
        }
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
            this.props.speechResultsAction.onListeningStatusChanged(false)

            // this.props.speechResultsAction.onListeningStop()
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

                // this.props.speechResultsAction.onListeningStop()
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

    componentWillUnmount() {
        Voice.destroy().then(Voice.removeAllListeners);
    }

    render() {
        return(
            <ChatTextInputCompo
                text = {this.state.text}
                onMessageChange = {this.onMessageChange}
                onTextInputFocus = {this.onTextInputFocus}
                onSubmit = {this.onSubmit}
                isListening = {this.state.isListening}
                isTyping = {this.state.isTyping}
                onSend = {this.onSend}
                onVoiceStart = {this.onVoiceStart}
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

export default connect(mapStateToProps, mapDispatchToProps)(ChatTextInput);