import { SET_AUTHENTICATED_STATUS } from './unauthenticatedTypes';

const initialState = {
    authentication_status : false
}

const reducer = (state : Record<string,any> = initialState, action : any) => {
    switch(action.type){
        case SET_AUTHENTICATED_STATUS:
            state.authentication_status = !state.authentication_status;
            return state;
        default:
            return state;
    }
}

export default reducer;