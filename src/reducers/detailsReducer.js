<<<<<<< HEAD

  
  export default (state = {}, action) => {
    switch (action.type) {
      case 'saveYpDetails':
        return { ...state, [action.payload.userId]: action.payload.formValues };
      case 'saveCompanyDetails':
        return { ...state, isSignedIn: false, userId: null };
      default:
        return state;
    }
  };
=======

  
  export default (state = {}, action) => {
    switch (action.type) {
      case 'saveYpDetails':
        return { ...state, [action.payload.userId]: action.payload.formValues };
      case 'saveCompanyDetails':
        return { ...state, isSignedIn: false, userId: null };
      default:
        return state;
    }
  };
>>>>>>> 221b84f1509a26e946bcb591c22d3c038670249d
  