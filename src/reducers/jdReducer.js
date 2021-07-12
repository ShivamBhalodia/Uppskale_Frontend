const INTIAL_STATE = {
    file: null
 };
 
 export default (state = INTIAL_STATE, action) => {
   switch (action.type) {
     case 'jd':
       return { ...state, file: action.payload};
     default:
       return state;
   }
 };