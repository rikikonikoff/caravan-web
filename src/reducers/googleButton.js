const initialState = {
  googleUser: {},
}

const googleButton = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'GOOGLE_BUTTON_CLICK':
      return {
        ...state,
        googleUser: payload,
      }
    default:
      return state;
  }
}

export default googleButton;
