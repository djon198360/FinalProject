import { isMobile } from "react-device-detect";
import * as S from "./Style";

export const RenderSearchForm = () => {
  return (
    <S.Search>
      {!isMobile ? (
        <S.SearchLogoLink>
          <S.SearchLogoImg src="img/logo.png" alt="logo" />
        </S.SearchLogoLink>
      ) : (
        <S.SearchLogoLinkMob>
          <S.SearchLogoImgMob src="img/logo-mob.png" alt="logo" />
        </S.SearchLogoLinkMob>
      )}
      {!isMobile ? (
        <S.SearchForm>
          <S.Input
            type="search"
            placeholder="Поиск по объявлениям"
            name="search"
          />
          <S.SearchButton type="button" value="dfdsfdsf">
            Найти
          </S.SearchButton>
        </S.SearchForm>
      ) : (
        <S.SearchFormMob>
          <S.InputMob type="search" placeholder="Поиск" name="search" />
        </S.SearchFormMob>
      )}
      {/*             <form class="search__form" action="#">
                        <input class="search__text" type="search" placeholder="Поиск по объявлениям" name="search">
                        <input class="search__text-mob" type="search" placeholder="Поиск" name="search-mob">
                        <button class="search__btn btn-hov02">Найти</button>
                    </form> */}
    </S.Search>
  );
};
