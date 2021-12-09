import { all } from 'redux-saga/effects';
import watchSplashScreen from './splashScreenSaga';
import watchWelcomeScreen from './welcomeScreenSaga';

export default function* sagas() {
  yield all([
    watchSplashScreen(),
    watchWelcomeScreen(),
  ]);
}
