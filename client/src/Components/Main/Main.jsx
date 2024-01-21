import { useState } from "react";
import Skeleton /* { SkeletonTheme } */ from "react-loading-skeleton";
import { device } from "../../Consts/ConstMediaScreen";
import { RenderModal } from "../../Modal/Modal";
import { NoImage, SERVER_URL } from "../../Consts/Consts";
import {
  formatDateMonth,
  formatDateWeek,
  hidePhone,
} from "../../assets/helpFunc";
import * as S from "./Style";

export const RenderMain = ({ headerBack, content, loading, error }) => {
  const [isModal, setModal] = useState(false);
  const [hide /* , setHide */] = useState(true);
  /*   const handleHideShowPhone = () => {
    if (hide) {
      setHide(false);
    } else {
      setHide(true);
    }
  }; */
  const [width] = useState(window.innerWidth);
  return (
    <>
      <RenderModal
        isVisible={isModal}
        onClose={() => setModal(false)}
        content={content}
        loading={loading}
        error={error}
      ></RenderModal>
      <S.Main>
        <S.MainContainer>
          {headerBack}
          <S.MainArticle>
            <S.ArticleContent>
              <S.ArticleLeft>
                <S.ArticleFillImg>
                  <S.ArticleImgDiv>
                    {loading && !content ? (
                      <Skeleton height="100%" width="100%" />
                    ) : (
                      <S.ArticleImgImg
                        src={
                          content?.images[0]
                            ? `${SERVER_URL}${content.images[0].url}`
                            : `${SERVER_URL}${NoImage}`
                        }
                        alt={content?.alt}
                      />
                    )}
                  </S.ArticleImgDiv>
                  {width && width === device.tablet ? (
                    <S.ArticleImgBarMob>
                      <S.ImgBarMobCircle>
                        {loading && !content ? (
                          <Skeleton circle />
                        ) : (
                          <S.ArticleImgBarDivImg
                            src={
                              content?.images[0]
                                ? `${SERVER_URL}${content.images[0].url}`
                                : `${SERVER_URL}${NoImage}`
                            }
                            alt={content?.alt}
                          />
                        )}
                      </S.ImgBarMobCircle>
                    </S.ArticleImgBarMob>
                  ) : (
                    <S.ArticleImgBar>
                      {loading || !content ? (
                        <S.ArticleImgBarDiv>
                          <Skeleton height="100%" width="100%" />
                        </S.ArticleImgBarDiv>
                      ) : (
                        content.images.map(({ url, id }) => (
                          <S.ArticleImgBarDiv key={id}>
                            {loading ? (
                              <Skeleton height="100%" width="100%" />
                            ) : (
                              <S.ArticleImgBarDivImg
                                src={`${SERVER_URL}${url}`}
                                key={id}
                              />
                            )}
                          </S.ArticleImgBarDiv>
                        ))
                      )}
                    </S.ArticleImgBar>
                  )}
                </S.ArticleFillImg>
              </S.ArticleLeft>
              <S.ArticleRight>
                <S.ArticleBlock>
                  <S.ArticleTitle>
                    {loading || !content ? <Skeleton /> : content.title}
                  </S.ArticleTitle>
                  <S.ArticleInfo>
                    <S.ArticleDate>
                      {loading || !content ? (
                        <Skeleton />
                      ) : (
                        formatDateWeek(content?.created_on)
                      )}
                    </S.ArticleDate>
                    <S.ArticleCity>
                      {loading || !content ? <Skeleton /> : content.user.city}
                    </S.ArticleCity>
                    <S.ArticleLink>Comment</S.ArticleLink>
                  </S.ArticleInfo>
                  <S.ArticlePrice>
                    {loading || !content ? (
                      <Skeleton />
                    ) : (
                      `${content.price.toLocaleString("ru-RU")}
                   ₽`
                    )}
                  </S.ArticlePrice>
                  <S.ArticleBtnBlock>
                    {
                      hide && content?.user.id === "3"
                        ? hidePhone(content?.user.phone)
                        : null /* content?.user.phone */
                    }
                    <S.ButtonRedact
                      onClick={() =>
                        setModal(true)
                      } /* onClick={() => handleHideShowPhone()} */
                    >
                      Редактировать
                    </S.ButtonRedact>
                    <S.ButtonRemove>Снять с публикации</S.ButtonRemove>
                  </S.ArticleBtnBlock>
                  <S.ArticleAuthor>
                    <S.AuthorImgDiv>
                      {loading && !content ? (
                        <Skeleton height="100%" width="100%" circle />
                      ) : (
                        <S.AuthorImg
                          src={
                            content?.user.avatar
                              ? `${SERVER_URL}${content.user.avatar}`
                              : `${SERVER_URL}${NoImage}`
                          }
                          alt={content?.alt}
                        />
                      )}
                    </S.AuthorImgDiv>
                    <S.AuthorCont>
                      <S.AuthorName>
                        {loading || !content ? <Skeleton /> : content.user.name}
                      </S.AuthorName>
                      <S.AuthorAbout>
                        Продает товары с
                        {loading || !content ? (
                          <Skeleton />
                        ) : (
                          `Продает товары с ${formatDateMonth(
                            content?.user.sells_from
                          )}`
                        )}
                      </S.AuthorAbout>
                    </S.AuthorCont>
                  </S.ArticleAuthor>
                </S.ArticleBlock>
              </S.ArticleRight>
            </S.ArticleContent>
          </S.MainArticle>
        </S.MainContainer>
        <S.MainContainer>
          <S.MainTitle>Описание товара</S.MainTitle>
          <S.MainContent>
            <S.MainText>
              {loading || !content ? <Skeleton /> : content.description}
            </S.MainText>
          </S.MainContent>
        </S.MainContainer>
      </S.Main>
    </>
  );
};
