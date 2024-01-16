import { useState } from "react";
import { isMobile } from "react-device-detect";
import { RenderSearchForm } from "../../Components/SearchForm/Form";
import { useGetAllPostsQuery } from "../../Services/ApiPost";
import { RenderCardItem } from "../../Components/Cards/CardsItem";
import { searchPosts } from "../../assets/helpFunc";
import * as S from "./Style";

export const Main = () => {
  const [searchValue, setSearchValue] = useState();
  const [errorMessage, setErrorMessage] = useState();
  const { data, error, isLoading } = useGetAllPostsQuery({
    // pollingInterval: 3000,
    // keepUnusedDataFor: 120,
    // refetchOnReconnect: true,
  });

  /*  const PostById = () => {
    // Will select the post with the given id, and will only rerender if the given post's data changes
    const { post } = useGetAllPostsQuery(undefined, {
      selectFromResult: ({ datas }) => ({
        post: datas,
      }),
    });

    console.log(post);
  };

  PostById(); */

  const isEmptyList = !isLoading && !data?.length;
  if (error) {
    if (error.status === "FETCH_ERROR") {
      setErrorMessage(error.status);
    }

    return (
      <h3>
        Не удалось загрузить объявления, попробуйте позже:
        {JSON.stringify(error.data, null, 2)}
      </h3>
    );
  }
  if (isEmptyList) {
    setErrorMessage("Список пуст");
  }

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
      {!isMobile ? (
        <S.MainContainer>
          <S.MainH2>Объявления</S.MainH2>
          <S.MainContent>
            <S.CardsBlock>
              {errorMessage
                ? `Не удалось загрузить объявления, попробуйте позже:
        ${JSON.stringify(error.data, null, 2)}
      `
                : null}
              {isLoading
                ? "Идет загрузка.."
                : allFilterPosts.map((post) => (
                    <RenderCardItem post={post} key={post.id}></RenderCardItem>
                  ))}
            </S.CardsBlock>
          </S.MainContent>
        </S.MainContainer>
      ) : (
        <S.MainContainerMob>
          <S.MainH2>Объявления</S.MainH2>
          <S.MainContentMob>
            {isLoading ? "Идет загрузка.." : null}
          </S.MainContentMob>
        </S.MainContainerMob>
      )}
    </S.Main>
  );
};
