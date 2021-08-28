import '~/styles/app.css';
import { useEffect } from 'react';
import styled from 'styled-components';
import { TransitionGroup, Transition } from 'react-transition-group';
import { useHistory } from '~/core/Router';
import titles from './lib/constants/titles';

import AlertModal from './components/modal/AlertModal';
import ConfirmModal from './components/modal/ConfirmModal';

import Navigation from '~/components/base/Navigation';
import LoadingText from './components/common/LoadingText';
import Routes from './Routes';

const Main = styled.main<{ nonScroll: boolean }>`
  position: relative;
  height: calc(100% - 104px);
  width: 1156px;
  ${({ nonScroll }) => nonScroll && `overflow: hidden;`}
`;

const StyledWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

const loadingAnimationDuration = 400;

const App = () => {
  const { location } = useHistory();

  useEffect(() => {
    Object.entries(titles).forEach(([key, val]) => {
      if (location.pathname.includes(key)) document.title = val;
    });
  }, [location]);

  return (
    <>
      <Navigation />
      <TransitionGroup className="transition-group" component={null}>
        <Transition key={location.pathname} timeout={loadingAnimationDuration}>
          {(state: string) => {
            return (
              <>
                <Main nonScroll={state !== 'entered'}>
                  <StyledWrapper>
                    <Routes />
                  </StyledWrapper>
                </Main>
                <LoadingText show={state !== 'entered'} />
              </>
            );
          }}
        </Transition>
      </TransitionGroup>

      <AlertModal />
      <ConfirmModal />
    </>
  );
};

export default App;
