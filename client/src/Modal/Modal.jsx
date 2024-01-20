/* eslint-disable react/no-array-index-key */
import { useEffect, useState } from "react";
import Skeleton /* { SkeletonTheme } */ from "react-loading-skeleton";
import { NoImage, SERVER_URL } from "../Consts/Consts";
import { useEditPostMutation } from "../Services/ApiPost";
import * as S from "./ModalStyle";

export const RenderModal = ({
  isVisible = false,
  onClose,
  content,
  loading,
  action,
}) => {
  const keydownHandler = ({ key }) => {
    switch (key) {
      case "Escape":
        onClose();
        break;
      default:
    }
  };
  const [editPost, { isLoading, error }] = useEditPostMutation();
  const [post, setPost] = useState();
  const serializeForm = (formNode) => {
    const { elements } = formNode.target;

    const data = new FormData();

    Array.from(elements)
      .filter((item) => !!item.name)
      .forEach((element) => {
        const { name, type } = element;
        const value = type === "checkbox" ? element.checked : element.value;
        console.log(name, value);
        data.append(name, value);
      });

    return data;
    //  return new FormData(formNode);
  };

  const setEditPost = async (e) => {
    e.preventDefault();
    const { id } = post;
    const dat = serializeForm(e);
    console.log(dat);
    /*   const formData = new FormData(e.target); */

    console.log(`Created FormData,  ${[...dat.keys()].length}  keys in data`);
    /*     const { title, price, description } = post; */
    /* const dataFiles = { title, price, description }; */

    const result = await editPost({ dat, id });
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
  useEffect(() => {
    setPost(content);
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
            <S.ModalTitle>
              {action ? "Добавить объявление " : "Редактировать объявление"}
            </S.ModalTitle>
            <S.ModalClose>
              <S.ModalCloseLine onClick={onClose}></S.ModalCloseLine>
            </S.ModalClose>
            <S.ModalForm
              onSubmit={(e) => {
                setEditPost(e);
              }}
            >
              <S.ModalFormBlock>
                <S.FormLabel htmlFor="name">
                  {loading && !action ? <Skeleton height="100%" /> : "Название"}
                </S.FormLabel>

                {loading || (!content?.title && !action) ? (
                  <Skeleton height="100%" width="100%" />
                ) : (
                  <S.InputName
                    id="title"
                    type="text"
                    name="title"
                    placeholder="Введите название"
                    value={post?.title ? post.title : ""}
                    onChange={(e) => {
                      update(e);
                    }}
                  ></S.InputName>
                )}
              </S.ModalFormBlock>
              <S.ModalFormBlock>
                <S.FormLabel htmlFor="text">
                  {loading && !action ? <Skeleton height="100%" /> : "Описание"}
                </S.FormLabel>
                {loading && !action ? (
                  <Skeleton height="100%" width="100%" />
                ) : (
                  <S.TextArea
                    id="description"
                    name="description"
                    cols="auto"
                    rows="10"
                    placeholder="Введите описание"
                    value={post?.description ? post.description : ""}
                    onChange={(e) => {
                      update(e);
                    }}
                  />
                )}
              </S.ModalFormBlock>
              <S.ModalFormBlock>
                <S.FormP>
                  {loading && !action ? (
                    <Skeleton height="100%" />
                  ) : (
                    "Фотографии товара"
                  )}
                  <S.FormPSpan>
                    {loading && !action ? (
                      <Skeleton height="100%" />
                    ) : (
                      " не более 5 фотографий"
                    )}
                  </S.FormPSpan>
                </S.FormP>
                <S.FormBarImg>
                  {loading || (!content && !action) ? (
                    <S.BarImg>
                      <Skeleton height="100%" width="100%" />
                    </S.BarImg>
                  ) : (
                    content?.images.map(({ url, id }) => (
                      <S.BarImg key={id}>
                        {loading && !action ? (
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
                        {/*            {loading ? (
                          <Skeleton height="100%" width="100%" />
                        ) : (
                          <S.BarImgImg
                            src={`${SERVER_URL}${NoImage}`}
                            key={index}
                          />
                        )} */}
                        <S.ImgCover></S.ImgCover>
                      </S.BarImg>
                    )
                  )}
                </S.FormBarImg>
              </S.ModalFormBlock>
              <S.ModalFormBlockPrice>
                <S.FormLabel htmlFor="price">
                  {loading && !action ? <Skeleton height="100%" /> : "Цена"}
                </S.FormLabel>
                <S.InputNamePrice
                  id="price"
                  type="number"
                  name="price"
                  $min-length="1"
                  placeholder="Введите цену &nbsp; "
                  value={post?.price ? post.price : ""}
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
