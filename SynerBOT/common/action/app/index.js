import { getMirrorData, saveMirrorData } from '../../db';
import Constant from '../../constant';
import config from '../../style';
import { checkStatus, parseJSON } from '../../util';

export const loadConfiguration = () => {
  return dispatch => {
    getMirrorData().then(mirrorData=>{
      if(mirrorData && mirrorData.mirrorURL){
        config.URL = `http://${mirrorData.mirrorURL}/`;
        dispatch({type: Constant.URL_AVAILABLE , payload:mirrorData.mirrorURL});
        dispatch(getSyncedProductDetails());
      }else{
        dispatch({type: Constant.MASTER_DATA_RECEIVED,payload:null});
      }
    });
  }
}

export const saveMirrorURL = (url) => {
  return dispatch => {
    saveMirrorData(url).then(()=>{
      config.URL = `http://${url}/`;
      dispatch({type: Constant.URL_AVAILABLE , payload:mirrorData.mirrorURL});
      dispatch(getSyncedProductDetails());
    });
  }
}

export const getSyncedProductDetails = () => {
  return dispatch => {
    fetch(config.URL + 'getSyncProductDetail', {
      method: 'get'
    })
    .then(checkStatus)
    .then(response => parseJSON(response))
    .then((result) => {
      dispatch({type: Constant.MASTER_DATA_RECEIVED,payload:result});
    })
    .catch((error) => {
      dispatch({type: Constant.MASTER_DATA_RECEIVED,payload:null});
    });
  }
}