import { StrictMode, useEffect } from "react";
import "react-loading-skeleton/dist/skeleton.css";
import { useSelector, useDispatch } from "react-redux";
import { setAuthReload } from "./Services/Slice/SliceAuth";
import { RenderFooter } from "./Components/Footer/Footer";
import { RenderHeader } from "./Components/Header/Header";
import { Spiner } from "./Components/LoadingSpiner/Loading";
import AppRoutes from "./Route/Routes";
import * as S from "./Style";

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setAuthReload(localStorage));
  }, [dispatch]);
  return (
    <StrictMode>
      <Spiner loading={useSelector((state) => state.SliceAuth.isState)} />
      <S.Wrapper>
        <S.Container>
          <RenderHeader />
          <AppRoutes />
          <RenderFooter />
        </S.Container>
      </S.Wrapper>
    </StrictMode>
  );
};
