import { SET_AUTHENTICATED_STATUS } from './unauthenticatedTypes';

export const setAuthenticationStatus = ( status : boolean ) => {
    return {
        type : SET_AUTHENTICATED_STATUS,
        payload : status
    }
}