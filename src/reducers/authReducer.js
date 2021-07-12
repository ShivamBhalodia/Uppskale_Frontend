<<<<<<< HEAD
const INTIAL_STATE = {
   userId: null
};

export default (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case 'signIn':
      return { ...state, userId: action.payload};
    case 'signUp':
      return {...state};
    default:
      return state;
  }
};
=======
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
>>>>>>> 221b84f1509a26e946bcb591c22d3c038670249d
