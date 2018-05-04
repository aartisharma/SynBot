import {createReducer} from '../util';
import Constant from '../constant';

const initialState = {
    userData: {},
    userInfo: null,
    authenticationStatus: null,
    loggingOutStatus: null,
};

export default createReducer(initialState, {
    [Constant.LOGIN_USER_DATA]: (state, payload) => Object.assign({}, state, {
        userData: payload,

    }),
    [Constant.USER_INFO_ERROR]: (state, payload) => Object.assign({}, state, {
        loading: false,
        userInfo: null,
        authenticationStatus: 'failed'
    }),
    [Constant.USER_INFO_SUCCESS]: (state, payload) => Object.assign({}, state, {
        loading: false,
        userInfo: payload.userInfo,
        authenticationStatus: 'valid'
    }),
    [Constant.RESET_UI]: (state, payload) => Object.assign({}, state, {
        authenticationStatus: 'NA',
        userInfo: null
    }),
});
