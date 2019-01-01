import {combineReducers} from 'redux';
import {SceneReducer} from './SceneReducer';

export default combineReducers({
    scene: SceneReducer
})