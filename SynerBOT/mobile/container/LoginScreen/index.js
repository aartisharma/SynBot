import React from 'react';
import {connect} from 'react-redux';
import LoginScreenComp from '../../component/LoginScreen';
import * as authActionCreator from '../../../common/action/auth';
import {bindActionCreators} from 'redux';

import {NavigationActions} from "react-navigation";

class LoginScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: props.username,
            emailId: props.emailId,
            error: '',
            loading: false,
        };
        this.onUserNameChanged = this.onUserNameChanged.bind(this);
        this.onEmailIdChanged = this.onEmailIdChanged.bind(this);
        this.onLoginDone = this.onLoginDone.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.authenticationStatus == "valid" ) {
            this.props.navigation.navigate('speech')
        }
        else{
            this.setState({error: "Please enter valid details"});
        }

    }

    onUserNameChanged(username) {
        if (this.props.auth.authenticationStatus === 'failed') {
            this.props.authActions.resetUI()
        }
        this.setState({username: username});
        this.setState({error: ''});
    }

    onEmailIdChanged(emailId) {
        if (this.props.auth.authenticationStatus === 'failed') {
            this.props.authActions.resetUI()
        }
        this.setState({emailId: emailId});
        this.setState({error: ''});
    }

    onLoginDone() {
        this.props.authActions.authenticateUser(this.state.username, this.state.emailId);
       // this.props.navigation.navigate('speech')
    }

    render() {
        return (
            <LoginScreenComp
                onUserNameChanged={this.onUserNameChanged}
                onEmailIdChanged={this.onEmailIdChanged}
                onLoginDone={this.onLoginDone}
                error={this.state.error}
                loading={this.state.loading}
            />
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
    loading: state.loading
});

const mapDispatchToProps = dispatch => ({
    dispatch,
    authActions: bindActionCreators(authActionCreator, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
