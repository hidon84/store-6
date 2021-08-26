import { useReducer } from 'react';
import { ErrorResponseBody, UsersGetResponseBody } from '~/lib/api/types';

// Interface
export interface UserModuleState {
  isLoggedIn: boolean;
  user: UsersGetResponseBody;
  requestError: ErrorResponseBody;
}

export interface UserModuleAction {
  type: string;
  payload: any;
}

// Action
export const SET_LOGIN = 'SET_LOGIN';
export const SET_LOGOUT = 'SET_LOGOUT';
export const SET_ERROR = 'SET_ERROR';
export const SET_USER_INFO = 'SET_USER_INFO';

// Action Creator
export const setLogin = (payload) => ({ type: SET_LOGIN, payload });
export const setLogout = () => ({ type: SET_LOGOUT });
export const setError = (payload) => ({ type: SET_ERROR, payload });
export const setUserInfo = (payload) => ({ type: SET_USER_INFO, payload });

// State
const INITIAL_STATE = {
  isLoggedIn: false,
  user: null,
  requestError: null,
};

// Reducer
const userReducer = (
  UserModuleState: UserModuleState,
  action: UserModuleAction,
): UserModuleState => {
  switch (action.type) {
    case SET_LOGIN:
      return {
        ...UserModuleState,
        isLoggedIn: true,
        user: action.payload,
        requestError: null,
      };
    case SET_LOGOUT:
      return { ...INITIAL_STATE };
    case SET_ERROR:
      return { ...UserModuleState, requestError: action.payload.error };
    case SET_USER_INFO: {
      console.log(action.payload);
      return { ...UserModuleState, user: { ...UserModuleState.user } };
    }
    default:
      return { ...UserModuleState };
  }
};

const userModule = () => {
  const [state, dispatch] = useReducer(userReducer, INITIAL_STATE);

  return { state, dispatch };
};

export default userModule;
