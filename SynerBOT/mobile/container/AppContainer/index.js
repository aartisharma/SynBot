import React from 'react';
import { StatusBar } from 'react-native';
import InitialStack from "../../../common/navigation";
import { connect } from 'react-redux';

class AppContainer extends React.Component {
    componentDidMount(){
        StatusBar.setHidden(true);
    }
    render() {

        return <InitialStack/>
    }
}

const mapStateToProps = state => ({
    navigation: state.navigation
});

const mapDispatchToProps = dispatch => ({
    dispatch
});
export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);