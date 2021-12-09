import { CONSTANTS } from '../../constants/AppConst';

const initialState = {
    visible: true,
};

const splashScreenReducer = (state = initialState, action) => {
    switch (action.type) {
        case CONSTANTS.SPLASH_SCREEN_HIDE_REQUEST: return { ...state };
        case CONSTANTS.SPLASH_SCREEN_HIDE_SUCCESS:
            return { ...state, visible: false };

        default:
            return state;
    }
};

export default splashScreenReducer;
