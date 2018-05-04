import { createReducer } from '../util';
import Constant from '../constant';

const initialState = {
  loading: false,
  loadingMessage: '',
  mirrorURL:null,
  productDataDetails:null,
  masterDataLoaded:false
};

export default createReducer(initialState, {
  [Constant.REQUEST_SENT]: (state, payload) => Object.assign({}, state, {
    loading: true,
    loadingMessage: payload
  }),
  [Constant.REQUEST_SUCCESS]: state => Object.assign({}, state, {
    loading: false,
    loadingMessage: ''
  }),
  [Constant.REQUEST_FAIL]: state => Object.assign({}, state, {
    loading: false,
    loadingMessage: ''
  }),
  [Constant.MASTER_DATA_RECEIVED]: (state, payload) => Object.assign({}, state, {
    masterDataLoaded: true,
    productDataDetails: payload
  }),
  [Constant.URL_AVAILABLE]:(state,payload) => Object.assign({}, state, {
    mirrorURL: payload
  }),
  [Constant.ON_SHOW_POPUP]: (state) => {
    return Object.assign({}, state, {
      showPopup: true
    });
  },
  [Constant.ON_POPUP_HIDE]: (state) => {
    return Object.assign({}, state, {
      showPopup: false
    });
  }
});
