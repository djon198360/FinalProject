import { useState } from "react";
import { isMobile } from "react-device-detect";
import { RenderSearchForm } from "../../Components/SearchForm/Form";
import { useGetAllPostsQuery } from "../../Services/ApiPost";
import { RenderCardItem } from "../../Components/Cards/CardsItem";
import { searchPosts } from "../../assets/helpFunc";
import * as S from "./Style";

export const Main = () => {
  const [searchValue, setSearchValue] = useState();
  const [errors, setErrors] = useState();
  const { data, error, isLoading } = useGetAllPostsQuery({
    // pollingInterval: 3000,
    // keepUnusedDataFor: 120,
    refetchOnReconnect: true,
  });
  const isEmptyList = !isLoading && !data?.length;
  if (error) {
    if (error.status === "FETCH_ERROR") {
      console.log("ошибка соединения с базой ");
      setErrors(error.status);
    }
    console.log(error);
    return (
      <h3>
        Не удалось загрузить объявления, попробуйте позже:
        {JSON.stringify(error.data, null, 2)}
      </h3>
    );
  }
  if (isEmptyList) {
    console.log("Список треков пуст");
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
              {errors ? "Error" : null}
              {isLoading
                ? "Идет загрузка.."
                : allFilterPosts.map((post, index) => (
                    <RenderCardItem
                      post={post}
                      index={index}
                      key={post.id}
                    ></RenderCardItem>
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
