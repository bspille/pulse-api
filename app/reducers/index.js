import { combineReducers } from 'redux';
import accessTokenReducer from './access-token-reducer';
import imageUrlReducer from './image-url-reducer';
import nameReducer from './name-reducer'
import isSignedInReducer from './is-signed-in-reducer'
import { reducer as formReducer } from 'redux-form';
import userReducer from './user-reducer'
import routeReducer from './route-reducer'

const rootReducer = combineReducers({
    idToken: accessTokenReducer,
    imageUrl: imageUrlReducer,
    name: nameReducer,
    isSignedIn: isSignedInReducer,
    form: formReducer,
    user: userReducer,
    route: routeReducer,

});
export default rootReducer;
