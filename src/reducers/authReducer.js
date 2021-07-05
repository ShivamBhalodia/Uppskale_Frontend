const INTIAL_STATE = {
   userId: null
};

export default (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case 'signIn':
      return { ...state, userId: action.payload};
    case 'signUpUser':
      return {...state};
    default:
      return state;
  }
};
