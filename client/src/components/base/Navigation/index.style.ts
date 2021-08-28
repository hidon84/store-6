import styled, { css, keyframes } from 'styled-components';
import { CartSVG, DoodleUselessSVG, festivalSVG, MypageSVG } from '~/assets';

const IconActivateCSS = css`
  filter: invert(61%) sepia(53%) saturate(573%) hue-rotate(129deg)
    brightness(95%) contrast(87%);
`;

const IconActivateHoverCSS = css`
  filter: invert(61%) sepia(53%) saturate(573%) hue-rotate(129deg)
    brightness(70%) contrast(87%);
`;

const FestivalIcon = styled.img.attrs({
  src: festivalSVG,
  alt: 'useless doodle',
})``;

const DoodleUselessIcon = styled.img.attrs({
  src: DoodleUselessSVG,
  alt: 'useless doodle',
})``;

const CartIcon = styled.img.attrs({
  src: CartSVG,
  alt: 'cart',
})<{ activate?: boolean }>`
  transition: 0.3s filter;
  ${({ activate = false }) => activate && IconActivateCSS}
`;

const MyPageIcon = styled.img.attrs({
  src: MypageSVG,
  alt: 'user',
})<{ activate?: boolean }>`
  transition: 0.3s filter;
  &:hover {
    ${({ activate = false }) =>
      activate ? IconActivateHoverCSS : IconActivateCSS}
  }
  ${({ activate = false }) => activate && IconActivateCSS}
`;

const NavigationWrapper = styled.nav`
  width: 100%;
  height: 100px;
`;

const Content = styled.div`
  height: 100%;
  position: relative;
  height: 100px;
  margin: 0 auto;
  width: 920px;
`;

const shake = keyframes`
  10%, 90% {
    transform: translateX(-1px);
  }
  
  20%, 80% {
    transform: translateX(2px);
  }

  30%, 50%, 70% {
    transform: translateX(-4px);
  }

  40%, 60% {
    transform: translateX(4px);
  }
`;

const FestivalWrapper = styled.div`
  position: absolute;
  top: 18px;
  cursor: pointer;

  &:hover {
    animation: ${shake} 0.6s ease-in-out;
  }
`;

const uselessDoodleHeight = '16px';
const UselessDoodle = styled.div`
  position: absolute;
  top: calc(50% - ${uselessDoodleHeight} / 2);
  left: 150px;
  height: ${uselessDoodleHeight};
`;

const logoHeight = '71px';
const logoWidth = '203px';
const logoOffset = '10px';
const Logo = styled.div`
  position: absolute;
  top: calc(50% - ${logoHeight} / 2);
  left: calc(50% - ${logoWidth} / 2 - ${logoOffset});
  width: ${logoWidth};
  height: ${logoHeight};
  display: inline-flex;
  justify-content: center;
  align-items: center;
`;

const headerRightSectionHeight = '34px';
const HeaderRightSection = styled.div`
  position: absolute;
  top: calc(50% - ${headerRightSectionHeight} / 2);
  right: 0;
  display: flex;
  align-items: center;

  & > a:not(:last-child) {
    margin-right: 45px;
  }
`;

const Badge = styled.div<{ badgeContent: string }>`
  position: absolute;
  bottom: 0px;
  right: -8px;
  text-align: center;
  line-height: 18px;
  height: 18px;
  width: 18px;
  color: #fff;
  background-color: var(--baemin100);
  border-radius: 50%;
  font-size: 12px;

  &:after {
    content: '${({ badgeContent }) => badgeContent ?? ''}';
  }
`;

const CartWrapper = styled.div<{ activate?: boolean }>`
  position: relative;

  &:hover {
    ${CartIcon} {
      ${({ activate = false }) =>
        activate ? IconActivateHoverCSS : IconActivateCSS}
    }
  }
`;

export default {
  IconActivateCSS,
  IconActivateHoverCSS,
  FestivalIcon,
  DoodleUselessIcon,
  CartIcon,
  MyPageIcon,
  NavigationWrapper,
  Content,
  FestivalWrapper,
  UselessDoodle,
  Logo,
  HeaderRightSection,
  Badge,
  CartWrapper,
};
