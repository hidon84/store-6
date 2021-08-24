import { FC } from "react";
import { LogoIcon, LogoTitle, StyledHeaderLogo } from "./index.style";

const HeaderLogo:FC = () => {
  return (
    <StyledHeaderLogo>
        <LogoIcon />
        <LogoTitle>
          <span className="text-baemin100">배민</span>
          <span>문방구</span>
        </LogoTitle>
    </StyledHeaderLogo>
  );
};

export default HeaderLogo;