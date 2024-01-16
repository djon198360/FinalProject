/* eslint-disable react/no-array-index-key */
import { useEffect, useState } from "react";
import Skeleton /* { SkeletonTheme } */ from "react-loading-skeleton";
import { NoImage, SERVER_URL } from "../Consts/Consts";
import { useEditPostIdMutation } from "../Services/ApiUser";
import * as S from "./ModalStyle";

export const RenderModal = ({
  isVisible = false,
  onClose,
  content,
  loading,
}) => {
  const keydownHandler = ({ key }) => {
    switch (key) {
      case "Escape":
        onClose();
        break;
      default:
    }
  };
  const [editPost, { isLoading, error }] = useEditPostIdMutation();
  const [post, setPost] = useState();

  const setEditPost = async (e) => {
    e.preventDefault();
    const { id } = post;
    console.log(id);
    console.log(e);
    const formData = new FormData(e.target);
    console.log(
      `Created FormData,  ${[...formData.keys()].length}  keys in data`
    );
    const { title, price, description } = post;
    const dataFiles = { title, price, description };

    const result = await editPost({ dataFiles, id });
    if (error) {
      console.log(error);
    }
    if (isLoading) {
      console.log(isLoading);
    }
    return result;
  };

  const update = (e) => {
    const elem = e.target;
    setPost({ ...post, [elem.id]: elem.value });
  };
  console.log(post);
  useEffect(() => {
    setPost(content);
    console.log(content);
  }, [content]);
  useEffect(() => {
    document.addEventListener("keydown", keydownHandler);
    return () => document.removeEventListener("keydown", keydownHandler);
  });

  return !isVisible ? null : (
    <S.Wrapper>
      <S.ContainerBg>
        <S.ModalBlock>
          <S.ModalContent>
            <S.ModalTitle>Редактировать объявление</S.ModalTitle>
            <S.ModalClose>
              <S.ModalCloseLine onClick={onClose}></S.ModalCloseLine>
            </S.ModalClose>
            <S.ModalForm
              onSubmit={(e) => {
                setEditPost(e);
              }}
            >
              <S.ModalFormBlock>
                <S.FormLabel for="name">
                  {loading ? <Skeleton height="100%" /> : "Название"}
                </S.FormLabel>

                {loading || !content?.title ? (
                  <Skeleton height="100%" width="100%" />
                ) : (
                  <S.InputName
                    id="title"
                    type="text"
                    name="title"
                    placeholder="Введите название"
                    value={post?.title ? post.title : null}
                    onChange={(e) => {
                      update(e);
                    }}
                  ></S.InputName>
                )}
              </S.ModalFormBlock>
              <S.ModalFormBlock>
                <S.FormLabel for="text">
                  {loading ? <Skeleton height="100%" /> : "Описание"}
                </S.FormLabel>
                {loading ? (
                  <Skeleton height="100%" width="100%" />
                ) : (
                  <S.TextArea
                    id="description"
                    name="description"
                    cols="auto"
                    rows="10"
                    placeholder="Введите описание"
                    value={post?.description ? post.description : null}
                    onChange={(e) => {
                      update(e);
                    }}
                  />
                )}
              </S.ModalFormBlock>
              <S.ModalFormBlock>
                <S.FormP>
                  {loading ? <Skeleton height="100%" /> : "Фотографии товара"}
                  <S.FormPSpan>
                    {loading ? (
                      <Skeleton height="100%" />
                    ) : (
                      " не более 5 фотографий"
                    )}
                  </S.FormPSpan>
                </S.FormP>
                <S.FormBarImg>
                  {loading || !content ? (
                    <S.BarImg>
                      <Skeleton height="100%" width="100%" />
                    </S.BarImg>
                  ) : (
                    content?.images.map(({ url, id }) => (
                      <S.BarImg key={id}>
                        {loading ? (
                          <Skeleton height="100%" width="100%" />
                        ) : (
                          <S.BarImgImg
                            src={`${SERVER_URL}${url}` || `${NoImage}`}
                            key={id}
                          />
                        )}
                        <S.ImgCover></S.ImgCover>
                      </S.BarImg>
                    ))
                  )}

                  {[...Array(5 - (content?.images.length || 0))].map(
                    (_, index) => (
                      <S.BarImg key={index}>
                        {loading ? (
                          <Skeleton height="100%" width="100%" />
                        ) : (
                          <S.BarImgImg
                            src={`${SERVER_URL}${NoImage}`}
                            key={index}
                          />
                        )}
                        <S.ImgCover></S.ImgCover>
                      </S.BarImg>
                    )
                  )}
                </S.FormBarImg>
              </S.ModalFormBlock>
              <S.ModalFormBlockPrice>
                <S.FormLabel for="price">
                  {loading ? <Skeleton height="100%" /> : "Цена"}
                </S.FormLabel>
                <S.InputNamePrice
                  id="price"
                  type="number"
                  name="price"
                  min-length="1"
                  placeholder="Введите цену &nbsp; "
                  value={post?.price ? post.price : null}
                  onChange={(e) => {
                    update(e);
                  }}
                ></S.InputNamePrice>
                <S.InputNamePriceCover />
              </S.ModalFormBlockPrice>
              <S.FormButton
                type="submit"
                /* onClick={(e) => {
                  setEditPost(e);
                }} */
              >
                Сохранить
              </S.FormButton>
            </S.ModalForm>
          </S.ModalContent>
        </S.ModalBlock>
      </S.ContainerBg>
    </S.Wrapper>
  );
};
