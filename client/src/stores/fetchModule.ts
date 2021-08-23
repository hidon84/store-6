import { useReducer } from 'react';

// Interface
export interface FetchState {
  state: string;
}

export interface FetchAction {
  type: string;
}

// Action
const START_FETCH = 'START_FETCH';
const FINISH_FETCH = 'FINISH_FETCH';

// Action Creator
export const startFetch = () => ({ type: START_FETCH });
export const finishFetch = () => ({ type: FINISH_FETCH });

// State
const INITIAL_FETCH_STATE = {
  state: START_FETCH,
};

// Reducer
const fetchReducer = (state: FetchState, action: FetchAction): FetchState => {
  switch (action.type) {
    case START_FETCH:
      return { state: 'START_FETCH' };
    case FINISH_FETCH:
      return { state: 'FINISH_FETCH' };
    default:
      return { ...state };
  }
};

const fetchModule = () => {
  const [fetchState, fetchDispatch] = useReducer(
    fetchReducer,
    INITIAL_FETCH_STATE,
  );

  return { fetchState, fetchDispatch };
};

export default fetchModule;
