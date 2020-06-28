import { takeEvery, all, takeLatest } from 'redux-saga/effects';
import { logoutSaga, checkAuthTimeoutSaga, authUserSaga, authCheckStateSaga } from './auth';
import * as actionTypes from '../actions/actionTypes';

export function* watchAuth() {
    //yield takeEvery(actionTypes.AUTH_INITIATE_LOGOUT, logoutSaga);
    //yield takeEvery(actionTypes.AUTH_CHECK_TIMEOUT, checkAuthTimeoutSaga);
    //yield takeEvery(actionTypes.AUTH_USER, authUserSaga);
    //yield takeEvery(actionTypes.AUTH_CHECK_STATE, authCheckStateSaga);
    //takeLatest will stop any current executions that are going for the saga, and only run the execution for the latest
    //action/watcher/event.
    yield all([
        takeEvery(actionTypes.AUTH_INITIATE_LOGOUT, logoutSaga),
        takeEvery(actionTypes.AUTH_CHECK_TIMEOUT, checkAuthTimeoutSaga),
        takeEvery(actionTypes.AUTH_USER, authUserSaga),
        takeEvery(actionTypes.AUTH_CHECK_STATE, authCheckStateSaga)
    ]);
}