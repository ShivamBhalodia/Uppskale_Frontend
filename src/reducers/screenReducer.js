const INTIAL_STATE = {
    screenSize: null
 };
 
 export default (state = INTIAL_STATE, action) => {
   switch (action.type) {
     case 'screen':
       return { ...state, screenSize: action.payload};
     default:
       return state;
   }
 };