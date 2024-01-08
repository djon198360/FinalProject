import { Link, useNavigate } from "react-router-dom";
import * as S from "./Style";

export const RenderHeadBack = () => {
  const history = useNavigate();
  return (
    <S.Container>
      <S.Menu>
        <Link to="/">
          <S.MenuImg src="/img/logo.png" alt="" />
        </Link>
        <S.Form>
          <S.Button
            type="button"
            onClick={() => {
              history("/");
            }}
          >
            Вернуться на главную
          </S.Button>
        </S.Form>
      </S.Menu>
    </S.Container>
  );
};
