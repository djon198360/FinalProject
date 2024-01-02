import styled from "styled-components";

export const Main = styled.main``;

export const MainContainer = styled.div`
  max-width: 1178px;
  margin: 0 auto;
  padding: 52px 10px 37px;
`;

export const MainContainerMob = styled.div`
  padding: 85px 10px 84px;
`;

export const MainH2 = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 42px;
  color: #000000;
  margin-bottom: 30px;
`;

export const MainContent = styled.div`
  width: 100%;
  margin: 0 auto;
`;
export const MainContentMob = styled.div`
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
  position: fixed;
  right: 0;
  left: 0;
  top: 134px;
  bottom: 84px;
`;

export const CardsBlock = styled.div`
  max-width: 1158px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 270px);
  grid-auto-rows: 441px;
  grid-gap: 40px 26px;
  justify-content: center;
  overflow-y: auto;
  scrollbar-color: #ffffff #2e2e2e;
  scrollbar-width: thin;
  scrollbar-width: 0px;
  height: 922px;
`;
