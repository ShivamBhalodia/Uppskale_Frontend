
  
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
  