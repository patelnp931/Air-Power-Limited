import { takeEvery, put, call } from 'redux-saga/effects';
import { CONSTANTS } from '../../constants/AppConst';

export function* handleSplashScreen() {
    try {
        yield put({
            type: CONSTANTS.SPLASH_SCREEN_HIDE_SUCCESS,
        });
    } catch (error) {
        console.log(error);
    }
}

export default function* watchSplashScreen() {
    yield takeEvery(CONSTANTS.SPLASH_SCREEN_HIDE_REQUEST, handleSplashScreen);
}