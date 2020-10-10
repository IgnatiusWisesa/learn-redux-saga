import {
    GET_USERS_REQUESTED
} from './usersType'

export const getUsers = ( users ) => {
    return{
        type: GET_USERS_REQUESTED,
        payload: users
    }
}