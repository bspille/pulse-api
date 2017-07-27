import { ERROR } from '../actions/types'

export default function(state = null, { type, payload }){
    switch(type){
        case ERROR:
            return payload;
        default:
            return state;

    }
}