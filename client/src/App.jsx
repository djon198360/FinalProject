import { StrictMode } from "react";
import AppRoutes from "./Route/Routes";
import { RenderHeader } from "./Components/Header/Header";
import * as S from "./Style";
/* import { Main } from "./Pages/Main/Main"; */

export const App = () => (
  <StrictMode>
    <S.Wrapper>
      <S.Container>
        <RenderHeader />
        <AppRoutes />
      </S.Container>
    </S.Wrapper>
  </StrictMode>
);
