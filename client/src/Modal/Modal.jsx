/* eslint-disable no-restricted-syntax */
/* eslint-disable react/no-array-index-key */
import { useEffect, useState } from "react";
import Skeleton /* { SkeletonTheme } */ from "react-loading-skeleton";
import { NoImage, SERVER_URL } from "../Consts/Consts";
import {
  useEditPostMutation,
  useCreatePostMutation,
  useUploadImageMutation,
} from "../Services/ApiPost";
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
  const [createPost, { data: createData }] = useCreatePostMutation();
  const [
    createImage,
    /*    {
       data: imageData 
    }, */
  ] = useUploadImageMutation();
  const [post, setPost] = useState();
  const [image, setImage] = useState([]);
  const [index, setIndex] = useState(0);
  const [arrayImage, setArrayImage] = useState([]);
  const countContent = content?.images.length;
  const count = countContent + index;
  if (createData) {
    setPost(createData);
  }
  const uploadImg = (se) => {
    const input = se.target;
    if (input.files && input.files[0]) {
      setImage(input.files[0]);
      if (input.files[0].type.match("image.*")) {
        const reader = new FileReader();
        reader.onload = function (e) {
          setImage({ ...image, [index]: e.target.result });
        };
        reader.readAsDataURL(input.files[0]);
      } else {
        console.log("ошибка, не изображение");
      }
      setIndex(index + 1);
    } else {
      console.log("хьюстон у нас проблема");
    }
    if (!action) {
      createImage({ arrayImage, post });
    }
  };

  const setEditPost = async (e) => {
    e.preventDefault();
    const result = await editPost({ arrayImage, post });
    if (error) {
      console.log(error);
    }
    if (isLoading) {
      console.log(isLoading);
    }
    return result;
  };

  const setCreatePost = async (e) => {
    e.preventDefault();
    const result = await createPost({ arrayImage, post });
    if (result) {
      console.log(result);
    }
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
  useEffect(() => {}, [image, arrayImage, index]);
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
              onSubmit={(e) => (action ? setCreatePost(e) : setEditPost(e))}
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
                  {Array.from({ length: index }, (_, indexs) => (
                    <S.BarImg>
                      <S.BarImgImg key={Math.random()} src={image[indexs]} />
                      <S.ImgCoverDelete></S.ImgCoverDelete>
                    </S.BarImg>
                  ))}
                  {action && index < 5 && (
                    <S.BarImg>
                      <S.Label htmlFor={index}>
                        <S.ImgCover>
                          <S.ButtonFile
                            multiple
                            accept="image/*"
                            type="file"
                            id={index}
                            name="files"
                            onChange={(e) => {
                              setArrayImage([...arrayImage, e.target.files[0]]);
                              uploadImg(e);
                            }}
                          />
                        </S.ImgCover>
                      </S.Label>
                    </S.BarImg>
                  )}
                  {!action && count < 5 && (
                    <S.BarImg>
                      <S.Label htmlFor={index}>
                        <S.ImgCover>
                          <S.ButtonFile
                            multiple
                            accept="image/*"
                            type="file"
                            id={index}
                            name="files"
                            onChange={(e) => {
                              setArrayImage([...arrayImage, e.target.files[0]]);
                              uploadImg(e);
                            }}
                          />
                        </S.ImgCover>
                      </S.Label>
                    </S.BarImg>
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
