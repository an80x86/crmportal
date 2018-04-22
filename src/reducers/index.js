import { combineReducers } from 'redux';
import artists from './artist_reducer';
import menus from './menu_reducer';

const rootReducer = combineReducers({
    artists, menus
})

export default rootReducer;
