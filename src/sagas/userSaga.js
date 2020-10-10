import { call, put, takeEvery } from 'redux-saga/effects'
import { API_URL } from './../helper/api'
import {
    GET_USERS_REQUESTED,
    GET_USERS_SUCCESS,
    GET_USERS_FAILED
} from './../redux/users/usersType'
import axios from 'axios'

function* getApi() {
    var output = null
    yield axios.get(API_URL)
    .then((res) => {
        output = res.data
    })
    .catch((err) => {
        output = err
    })

    return output
}

function* fetchUsers(action){
    
    yield console.log('masuk fetch user saga')
    yield console.log(action)

    try{
        const users = yield call(getApi)
        yield console.log('usaga',users)
        yield put({ type: GET_USERS_SUCCESS, users: users })
    } catch(e) {
        yield({ type: GET_USERS_FAILED, message: e.message })
    }
}

function* userSaga(){
    yield console.log('masuk user saga')
    yield takeEvery(GET_USERS_REQUESTED, fetchUsers)
}

export default userSaga