import { LOGOUT } from '../../utils/constants/action_types';

const initialState = {
  isLogged: false,
  hasError: false,
  isLoading: false,
  logoutIsLoading: false,
  name: '',
  username: '',
  password: '',
  error: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGOUT:
      return {
        ...state,
        isLogged: false,
        name: '',
        username: '',
        password: '',
      };
    default:
      return state;
  }
};
