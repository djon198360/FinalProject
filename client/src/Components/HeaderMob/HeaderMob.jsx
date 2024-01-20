import * as S from "./Style";

export const RenderHeaderMob = () => {
  return (
    <S.Header>
      <S.HeaderNav>
        <S.HeaderLogo>
          <S.LogoLink>
            <S.LogoImg src="../img/logo-mob.png" alt="logo" />
          </S.LogoLink>
        </S.HeaderLogo>
      </S.HeaderNav>
    </S.Header>
  );
};
