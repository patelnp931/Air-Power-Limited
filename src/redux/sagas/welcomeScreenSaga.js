import { takeEvery, put } from 'redux-saga/effects';
import { CONSTANTS } from '../../constants/AppConst';

export function* handleWelcomeScreen() {
    try {
        yield put({
            type: CONSTANTS.WELCOME_SCREEN_VIEW_SUCCESS,
        });
    } catch (error) {
        console.log(error);
    }
}

export default function* watchWelcomeScreen() {
    yield takeEvery(CONSTANTS.WELCOME_SCREEN_VIEW_REQUEST, handleWelcomeScreen);
}