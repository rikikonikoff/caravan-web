import * as authentications from '../api/backendAPI/authentications';

export const clickGoogleLogin = (
  type = 'GOOGLE_BUTTON_CLICK',
  apiCall = authentications.create
) => {
  return values => (dispatch, getState) => {
    return apiCall({ values, getState }).then(payload =>
      dispatch({ type, payload })
    );
  };
};
