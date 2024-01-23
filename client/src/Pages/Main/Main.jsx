import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { RenderCardItem } from "../../Components/Cards/CardsItem";
import { RenderError } from "../../Components/Error/Error";
import { RenderSearchForm } from "../../Components/SearchForm/Form";
import { useGetAllPostsQuery } from "../../Services/ApiPost";
import { setIsState } from "../../Services/Slice/SliceAuth";
import { searchPosts } from "../../assets/utils";
import * as S from "./Style";

export const Main = () => {
  const dispatch = useDispatch();
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

  useEffect(() => {
    dispatch(setIsState(isLoading));
  }, [dispatch, isLoading]);

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
            {data &&
              allFilterPosts.map((post) => (
                <RenderCardItem post={post} key={post.id}></RenderCardItem>
              ))}
            {isEmptyList && !error && "Объявлений не найдено"}
          </S.CardsBlock>
        </S.MainContent>
      </S.MainContainer>
    </S.Main>
  );
};
