import * as S from "./Style";

export const RenderSearchForm = (setSearchValue) => {
  return (
    <S.Search>
      <S.SearchLogoLink>
        <S.SearchLogoImg src="img/logo.png" alt="logo" />
      </S.SearchLogoLink>

      <S.SearchLogoLinkMob>
        <S.SearchLogoImgMob src="img/logo-mob.png" alt="logo" />
      </S.SearchLogoLinkMob>

      <S.SearchForm>
        <S.Input
          type="search"
          placeholder="Поиск по объявлениям"
          name="search"
          value={setSearchValue.setSearchValue}
          onChange={setSearchValue.onChange}
        />
        <S.InputMob
          type="search"
          placeholder="Поиск по объявлениям"
          name="search"
          value={setSearchValue.setSearchValue}
          onChange={setSearchValue.onChange}
        />
        <S.SearchButton type="button" value="dfdsfdsf">
          Найти
        </S.SearchButton>
      </S.SearchForm>
    </S.Search>
  );
};
