import '~/styles/app.css';
import { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { useHistory } from '~/core/Router';
import titles from './lib/constants/titles';

import AlertModal from './components/modal/AlertModal';
import ConfirmModal from './components/modal/ConfirmModal';

import Navigation from '~/components/base/Navigation';
import LoadingText from './components/common/LoadingText';
import Routes from './Routes';

const Main = styled.main<{ nonScroll: boolean }>`
  position: relative;
  height: 100%;
  width: 1156px;
  ${({ nonScroll }) => nonScroll && `overflow: hidden;`}

  &.loading-exit {
    display: none;
  }
`;

const StyledWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

const loadingAnimationDuration = 550;

const App = () => {
  const { location } = useHistory();
  const [showLoading, setShowLoading] = useState(false);

  useEffect(() => {
    Object.entries(titles).forEach(([key, val]) => {
      if (location.pathname.includes(key)) document.title = val;
    });
  }, [location]);

  const onEnterTransition = useCallback(() => setShowLoading(true), [setShowLoading]);
  const onExitedTransition = useCallback(() => setShowLoading(false), [setShowLoading]);

  return (
    <>
      <Navigation />
      <TransitionGroup className="transition-group" component={null}>
        <CSSTransition 
          key={location.pathname}
          classNames="loading"
          timeout={loadingAnimationDuration}
          onEnter={onEnterTransition}
          onExited={onExitedTransition}
        >
          <Main nonScroll={showLoading}>
            <StyledWrapper>
              <Routes />
            </StyledWrapper>
          </Main>
        </CSSTransition>
      </TransitionGroup>
      <LoadingText show={showLoading} fadeOutDuration={loadingAnimationDuration / 2}/>
      <AlertModal />
      <ConfirmModal />
    </>
  );
};

export default App;
