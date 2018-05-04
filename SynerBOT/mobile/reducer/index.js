import {combineReducers} from 'redux';
import speechResults from '../../common/reducer/speechResult';
import auth from '../../common/reducer/auth';
import message from '../../common/reducer/speechResult';

export default combineReducers({
    speechResults,
    auth
});
