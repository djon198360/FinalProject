import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useGetPostIdQuery } from "../../Services/ApiPost";
import { RenderHeadBack } from "../../Components/HeadBack/Back";
import { formateDate, hidePhone } from "../../assets/helpFunc";
import { SERVER_URL, NoImage } from "../../Consts/Consts";
import * as S from "./Style";

export const Article = () => {
  const history = useNavigate();
  const isAuth = true;
  const idUser = localStorage.getItem("id");
  const [hide, setHide] = useState(true);
  const { id: ids } = useParams();

  const { data, isLoading, error } = useGetPostIdQuery(ids);

  /*   useEffect(() => {
    console.log(datas);

  }, [data]); */

  /* const { id||null, title, description, price, user, images, user_id, created_on } =
    datas; */
  /* const handleHideShowPhone = hide ? setHide(false) : setHide(true); */
  const handleHideShowPhone = () => {
    if (hide) {
      setHide(false);
    } else {
      setHide(true);
    }
  };

  return (
    <S.Main>
      <S.Container>
        <RenderHeadBack />
      </S.Container>
      <S.Article>
        <S.ArticleContent id={data?.id || null}>
          <S.ArticleLeft>
            <S.ArticleFiilImg>
              <S.ArticleImg>
                <S.ArticleImgImg
                  key="001"
                  src={`${SERVER_URL}${data?.images[0]?.url || NoImage}`}
                />
              </S.ArticleImg>
              <S.ArticleImgBar>
                {error || null}
                {data?.images
                  ? data.images.map(({ url, id }) => (
                      <S.ArticleImgBarDiv key={id}>
                        <S.ArticleImgImg src={`${SERVER_URL}${url}`} key={id} />
                      </S.ArticleImgBarDiv>
                    ))
                  : null}
              </S.ArticleImgBar>
            </S.ArticleFiilImg>
          </S.ArticleLeft>
          <S.ArticleRight>
            <S.ArticleBlock>
              <S.ArticleTitle>{data?.title}</S.ArticleTitle>
              <S.ArticleInfo>
                {isLoading ? (
                  <S.ArticleDate></S.ArticleDate>
                ) : (
                  <S.ArticleDate>{formateDate(data?.created_on)}</S.ArticleDate>
                )}
                <S.ArticleSity>{data?.user.city}</S.ArticleSity>
                <S.ArticleLink>23 отзыва</S.ArticleLink>
              </S.ArticleInfo>
              <S.ArticlePrice>
                {data?.price.toLocaleString("ru-RU")} ₽
              </S.ArticlePrice>
              <S.ArticleButton onClick={() => handleHideShowPhone()}>
                Показать&nbsp;телефон
                <S.ArticleButtonSpan>
                  {hide ? hidePhone(data?.user.phone) : data?.user.phone}
                </S.ArticleButtonSpan>
              </S.ArticleButton>
              <S.ArticleAuthor id={data?.user_id}>
                <S.AuthorImg>
                  <S.AuthorImgImg
                    src={`${SERVER_URL}${data?.user?.avatar || NoImage}`}
                    alt={data?.user.name}
                  />
                </S.AuthorImg>
                <S.AuthorCont>
                  <S.AuthorName
                    onClick={() =>
                      isAuth && idUser === data?.user.id
                        ? history("/profile/")
                        : history(`/profile/${data?.user.id}`)
                    }
                  >
                    {data?.user.name}
                  </S.AuthorName>
                  {isLoading ? (
                    <S.AuthorAbout></S.AuthorAbout>
                  ) : (
                    <S.AuthorAbout>
                      Продает товары с {formateDate(data?.user.sells_from)}
                    </S.AuthorAbout>
                  )}
                </S.AuthorCont>
              </S.ArticleAuthor>
            </S.ArticleBlock>
          </S.ArticleRight>
        </S.ArticleContent>
      </S.Article>
      <S.Container>
        <S.MainTitle>Описание товара</S.MainTitle>
        <S.MainContent>
          {data?.description || "Описание этого товара отсутствует"}
        </S.MainContent>
      </S.Container>
    </S.Main>
  );
};
