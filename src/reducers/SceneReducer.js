import { ActionConst } from 'react-native-router-flux';
export const SceneReducer = (state = {}, {type, scene}) => {
    switch(type){
        case ActionConst.PUSH:
            return { ...state, scene };
        default:
            return state;
    }    
}