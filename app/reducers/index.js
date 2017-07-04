import { combineReducers } from 'redux';
import accessTokenReducer from './access-token-reducer';
import imageUrlReducer from './image-url-reducer';
import nameReducer from './name-reducer'

const rootReducer = combineReducers({
    idToken: accessTokenReducer,
    imageUrl: imageUrlReducer,
    name: nameReducer,

});
export default rootReducer;
