import { FetchModuleAction } from '~/stores/fetchModule';
import createNamedContext from './createNamedContext';

interface FetchContextState {
  state: {
    action: string;
    forcedDelayTime: number;
  };
  dispatch: (action: FetchModuleAction) => void;
}

const FetchContext = createNamedContext<FetchContextState>('FetchContext');

export default FetchContext;
