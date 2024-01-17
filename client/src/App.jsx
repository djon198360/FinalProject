import { StrictMode } from "react";
import "react-loading-skeleton/dist/skeleton.css";
import AppRoutes from "./Route/Routes";
import { RenderHeader } from "./Components/Header/Header";
import { RenderFooter } from "./Components/Footer/Footer";
import * as S from "./Style";
/* import { Main } from "./Pages/Main/Main"; */

export const App = () => (
  <StrictMode>
    <S.Wrapper>
      <S.Container>
        <RenderHeader />
        <AppRoutes />
        <RenderFooter />
      </S.Container>
    </S.Wrapper>
  </StrictMode>
);
