import { ERROR } from '../actions/types'


export default function({ dispatch }){
    return next => action => {
        console.log(action)
        if(!action.payload.then){
            next(action);
        }
        
        action.payload
            .then(response => {
                if(response.status === 400){
                    console.log(response)
                    const newAction = { type: ERROR, payload: response}
                }
                const newAction = { ...action, payload: response };
                dispatch(newAction);
            })
    };
}