import history from '../history';

export const signIn = formValues => {
    
    history.push('/');
    return {
        type: 'signIn',
        payload: formValues['email']
        
    };
    
};


export const signUp = (formValues) => {
    
       
    // console.log( getState);
//   const response = await streams.post('/streams', { ...formValues, userId });
return {
    type: 'signUp',
};
//  dispatch({ type: 'signUp', payload: {'formValues':formValues}});
// history.push('/');
};


// export const signUp = (formValues) => async (dispatch, getState) => {
    
//     console.log(getState());
// //   const response = await streams.get('/streams');
// //   dispatch({ type: FETCH_STREAMS, payload: response.data });
//     dispatch({ type: 'signUp' ,payload: formValues});
//     history.push('/');
// };


// export const signUp = (formValues) =>  async (dispatch, getState) => {
//     const  {userId}  = getState().auth;
//     console.log(userId);
//     dispatch({ type: 'signUp' });
    
//     // if(getState().status.isSelectedYp=="true")
//     // history.push('/ypdetails');
//     // else
//     // history.push('/companydetails');
// };
