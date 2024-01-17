import { useState } from "react";
import { RenderSearchForm } from "../../Components/SearchForm/Form";
import { useGetAllPostsQuery } from "../../Services/ApiPost";
import { RenderCardItem } from "../../Components/Cards/CardsItem";
import { searchPosts } from "../../assets/helpFunc";
import { RenderError } from "../../Components/Error/Error";
import * as S from "./Style";

export const Main = () => {
  const [searchValue, setSearchValue] = useState();
  const { data, isLoading, error } = useGetAllPostsQuery({});
  const isEmptyList = !isLoading && !data?.length;
  const filterPosts = () => {
    let allFilterPosts = data;
    if (searchValue?.length > 0) {
      allFilterPosts = searchPosts(searchValue, allFilterPosts);
    }
    return allFilterPosts;
  };
  const allFilterPosts = filterPosts();

  return (
    <S.Main>
      <RenderSearchForm
        setSearchValue={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
      />
      <S.MainContainer>
        <S.MainH2>Объявления</S.MainH2>
        <S.MainContent>
          <S.CardsBlock>
            {error ? <RenderError error={error.error} /> : null}
            {!isEmptyList && data
              ? allFilterPosts.map((post) => (
                  <RenderCardItem post={post} key={post.id}></RenderCardItem>
                ))
              : null}
          </S.CardsBlock>
        </S.MainContent>
      </S.MainContainer>
    </S.Main>
  );
};
