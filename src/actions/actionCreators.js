import * as authentications from '../api/backendAPI/authentications';
import { browserHistory } from 'react-router';

export const createThunkWithRedirect = ({
  requestActionType: type,
  apiCall,
}) => {
  return values => (dispatch, getState) => {
    dispatch({ type, payload: values });

    return apiCall({ values, getState }).then(payload => {
      dispatch({ type: `${type}_SUCCESS`, payload })
    }).then(() => {
      browserHistory.push('/home')
    }).catch(error => {
        dispatch({ type: `${type}_FAILURE`, error })
    });
  };
};

export const clickGoogleLogin = createThunkWithRedirect({
  requestActionType: 'GOOGLE_BUTTON_CLICK',
  apiCall: authentications.create,
});
