import React, { FC } from "react";
import styled from "styled-components";
import checkSVG from "~/assets/check.svg";
import checkCircleSVG from "~/assets/check-circle.svg"

const RadioContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  gap: 0.6rem;
  cursor: pointer;
`;

const RadioWrapper = styled.div`
  position: relative;
  height: 1rem;
`;

const CheckCircleImg = styled.img`
  height: 100%;
`;

const CheckImg = styled.img`
  position: absolute;
  bottom: 5px;
  left: 1px;
`;

const RadioButton: FC<{ isChecked: boolean, onClick?: () => void, label: string }> = ({ isChecked, onClick, label }) => {
  return (
    <RadioContainer onClick={() => onClick?.()}>
      <RadioWrapper>
        {isChecked && <CheckImg src={checkSVG}></CheckImg> }
        <CheckCircleImg src={checkCircleSVG}></CheckCircleImg>
      </RadioWrapper>
      {label}
    </RadioContainer>
  );
};

export default RadioButton;
