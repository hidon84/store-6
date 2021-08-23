import { useReducer } from 'react';

// Interface
export interface FetchModuleState {
  state: string;
  forcedDelayTime: number;
}

export interface FetchModuleAction {
  type: string;
}

// Action
const START_FETCH = 'START_FETCH';
const FINISH_FETCH = 'FINISH_FETCH';
const INIT_FETCH = 'INIT_FETCH';

// Action Creator
export const startFetch = () => ({ type: START_FETCH });
export const finishFetch = () => ({ type: FINISH_FETCH });
export const initFetch = () => ({ type: INIT_FETCH });

// State
const INITIAL_FETCH_STATE = {
  state: 'INIT_FETCH',
  forcedDelayTime: 300,
};

// Reducer
const fetchReducer = (
  fetchModuleState: FetchModuleState,
  action: FetchModuleAction,
): FetchModuleState => {
  switch (action.type) {
    case START_FETCH:
      return { ...fetchModuleState, state: 'START_FETCH' };
    case FINISH_FETCH:
      return { ...fetchModuleState, state: 'FINISH_FETCH' };
    case INIT_FETCH:
      return { ...fetchModuleState, state: 'INIT_FETCH' };
    default:
      return { ...fetchModuleState };
  }
};

const fetchModule = () => {
  const [state, dispatch] = useReducer(fetchReducer, INITIAL_FETCH_STATE);

  return { state, dispatch };
};

export default fetchModule;
