import styled from 'styled-components';

export const ProductDetailWrapper = styled.main`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding-top: 50px;
  width: 900px;
  height: 100%;
`;

export const LeftSection = styled.section`
  width: 400px;
  background-color: lightcoral;
`;

export const RightSection = styled(LeftSection)`
  background-color: lightblue;
  height: 900px;
`;

export const LayoutDivider = styled.div`
  width: fit-content;
`;

export const PrevPageButton = styled.div`
  position: absolute;
  top: 90px;
  left: 0;
  width: 40px;
`;
