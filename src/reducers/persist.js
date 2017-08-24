const persist = (state = {}, { type, payload }) => {
  switch (type) {
    case 'persist/REHYDRATE':
      return { ...state, persistedState: payload }
    default:
      return state;
  }
}

export default persist;
