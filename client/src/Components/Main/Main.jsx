/* eslint-disable react/jsx-no-useless-fragment */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Skeleton /* { SkeletonTheme } */ from "react-loading-skeleton";
import { useSelector } from "react-redux";
import {
  useDeletePostMutation,
  /*   useGetAllCommentsQuery, */
} from "../../Services/ApiPost";
import { device } from "../../Consts/ConstMediaScreen";
import { NoImage, SERVER_URL } from "../../Consts/Consts";
import { RenderComment } from "../../Modal/Comment";
import { RenderModal } from "../../Modal/Modal";
import { RenderHeaderMob } from "../HeaderMob/HeaderMob";
import {
  formatDateMonth,
  formatDateWeek,
  hidePhone,
} from "../../assets/helpFunc";
import * as S from "./Style";

export const RenderMain = ({
  headerBack,
  content,
  loading,
  error,
  datacomment,
  id: idPost,
}) => {
  const history = useNavigate();
  const [deletePost] = useDeletePostMutation();
  const userInfoData = useSelector((state) => state.SliceAuth);
  const { id, isAuth } = userInfoData;
  const [isModal, setModal] = useState(false);
  const [isVisibleComment, setIsVisibleComment] = useState(false);
  const [hide, setHide] = useState(true);
  const handleHideShowPhone = () => {
    if (hide) {
      setHide(false);
    } else {
      setHide(true);
    }
  };
  const delPost = async () => {
    const result = await deletePost(idPost);
    if (result?.data === null) {
      history(`/`);
    }
  };
  const [width] = useState(window.innerWidth);
  return (
    <>
      <S.Main>
        <RenderModal
          isVisible={isModal}
          onClose={() => setModal(false)}
          content={content}
          loading={loading}
          error={error}
        ></RenderModal>
        <RenderComment
          isVisible={isVisibleComment}
          onClose={() => setIsVisibleComment(false)}
          content={datacomment}
          loading={loading}
          idPost={idPost}
        ></RenderComment>
        <S.MainContainer>
          {headerBack}
          <RenderHeaderMob />
          <S.MainArticle>
            <S.ArticleContent>
              <S.ArticleLeft>
                <S.ArticleFillImg
                  onClick={() => {
                    history("/");
                  }}
                >
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
                            key={content?.images[0].id}
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
                        content.images.map(({ url, index }) => (
                          <S.ArticleImgBarDiv key={index}>
                            {loading ? (
                              <Skeleton
                                key={index}
                                height="100%"
                                width="100%"
                              />
                            ) : (
                              <S.ArticleImgBarDivImg
                                src={`${SERVER_URL}${url}`}
                                key={index}
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
                    <S.ArticleLink onClick={() => setIsVisibleComment(true)}>
                      Comment{" "}
                      {datacomment?.length ? `(${datacomment.length})` : ""}
                    </S.ArticleLink>
                  </S.ArticleInfo>
                  <S.ArticlePrice>
                    {loading || !content ? (
                      <Skeleton height="100%" width="100%" />
                    ) : (
                      `${content.price.toLocaleString("ru-RU")} ₽`
                    )}
                  </S.ArticlePrice>
                  <S.ArticleBtnBlock>
                    {Number(content?.user.id) === Number(id) && (
                      <>
                        {loading ? (
                          <Skeleton height="100%" width="100%" />
                        ) : (
                          <>
                            <S.ButtonRedact onClick={() => setModal(true)}>
                              Редактировать
                            </S.ButtonRedact>
                            <S.ButtonRemove onClick={() => delPost()}>
                              Снять с публикации
                            </S.ButtonRemove>
                          </>
                        )}
                      </>
                    )}

                    {Number(content?.user.id) !== Number(id) && (
                      <>
                        {loading ? (
                          <Skeleton height="100%" width="100%" />
                        ) : (
                          <S.ArticleButton
                            onClick={() => handleHideShowPhone()}
                          >
                            {hide ? "Показать телефон" : "Скрыть телефон"}
                            <S.ArticleButtonSpan>
                              {hide
                                ? hidePhone(content?.user.phone)
                                : content?.user.phone}
                            </S.ArticleButtonSpan>
                          </S.ArticleButton>
                        )}
                      </>
                    )}
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
                      <S.AuthorName
                        onClick={() =>
                          isAuth && Number(content.user.id) === Number(id)
                            ? history("/profile/")
                            : history(`/profile/${content?.user.id}`)
                        }
                      >
                        {loading || !content ? (
                          <Skeleton />
                        ) : (
                          content.user.name ?? "NoName"
                        )}
                      </S.AuthorName>
                      <S.AuthorAbout>
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
          <S.MainTitle>Описание товара </S.MainTitle>
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
