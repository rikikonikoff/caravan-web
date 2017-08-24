export const initialState = {}

export const authentication = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'GOOGLE_BUTTON_CLICK_SUCCESS':
      return payload.auth
    default:
      return state;
  }
}

export default authentication;
