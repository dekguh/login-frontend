import { IAppInitialState, IPayloadAction } from '../types';

export const UPDATE_IS_LOGIN = 'UPDATE_IS_LOGIN'

export default (state : IAppInitialState, action : IPayloadAction) : IAppInitialState => {
    switch(action.type) {
        case UPDATE_IS_LOGIN:
            return {
                ...state,
                isLogin: action.payload
            }
        default:
            return state
    }
}