import { FC, useCallback } from 'react';
import { useHistory } from '~/core/Router';
import {
  NoMatchingRouteWrapper,
  Content,
  Title,
  SubTitle,
  ErrorCode,
  GoToHome,
  NoRouteImage,
} from './index.style';

interface IProps {
  errorCode?: number;
}

const NoMatchingRoute: FC<IProps> = ({ errorCode = 404 }) => {
  const { push } = useHistory();
  const goToHome = useCallback(() => {
    push('/');
  }, []);

  return (
    <NoMatchingRouteWrapper>
      <Content>
        <Title>죄송합니다.</Title>
        <SubTitle>원하시는 페이지를 찾을 수 없습니다.</SubTitle>
        <ErrorCode>오류코드 : {errorCode}</ErrorCode>
        <GoToHome onClick={goToHome}>홈으로 가기</GoToHome>
      </Content>
      <NoRouteImage />
    </NoMatchingRouteWrapper>
  );
};

export default NoMatchingRoute;
