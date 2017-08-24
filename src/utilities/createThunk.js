export const createThunk = ({ requestActionType: type, apiCall }) => {
  return values => (dispatch, getState) => {
    dispatch({ type, payload: values });

    return apiCall({ values, getState }).then(
      payload => dispatch({ type: `${type}_SUCCESS`, payload }),
      payload => dispatch({ type: `${type}_FAILURE`, payload }),
    );
  };
};

export const createSuccessOnlyThunk = ({
  requestActionType: type,
  apiCall,
}) => {
  return values => (dispatch, getState) => {
    dispatch({ type });

    return apiCall({ values, getState }).then(payload =>
      dispatch({ type: `${type}_SUCCESS`, payload }),
    );
  };
};

//this utility: copyright David Rodriguez Fuentes
