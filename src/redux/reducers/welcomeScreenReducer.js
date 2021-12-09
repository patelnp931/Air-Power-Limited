import { CONSTANTS } from '../../constants/AppConst';

const initialState = {
    showingWelcomeScreen: true,
};

const welcomeScreenReducer = (state = initialState, action) => {
    switch (action.type) {
        case CONSTANTS.WELCOME_SCREEN_VIEW_REQUEST: return { ...state };
        case CONSTANTS.WELCOME_SCREEN_VIEW_SUCCESS:
            return { ...state, showingWelcomeScreen: false };
        default:
            return state;
    }
};

export default welcomeScreenReducer;
