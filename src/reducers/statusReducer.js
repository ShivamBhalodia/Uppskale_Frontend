const INTIAL_STATE = {
       isSelectedYp: false,
       isSelectedCompany: false
    };
    
    export default (state = INTIAL_STATE, action) => {
      switch (action.type) {
        case 'statusYp':
          if(state.isSelectedYp===false)
          {
            if(state.isSelectedCompany===true)
            {
              return { ...state, isSelectedYp: !state['isSelectedYp'],isSelectedCompany: !state['isSelectedCompany']};
            }
            else
            {
              return { ...state, isSelectedYp: !state['isSelectedYp']};
            }
          }
          else
          return state;
        case 'statusCompany':
          if(state.isSelectedCompany===false)
          {
            if(state.isSelectedYp===true)
            {
              return { ...state, isSelectedYp: !state['isSelectedYp'],isSelectedCompany: !state['isSelectedCompany']};
            }
            else
            {
              return { ...state, isSelectedCompany: !state['isSelectedCompany']};
            }
          }
          else
          return state;
        default:
          return state;
      }
    };