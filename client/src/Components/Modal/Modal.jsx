import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Skeleton /* { SkeletonTheme } */ from "react-loading-skeleton";
import { setIsState } from "../../Services/Slice/SliceAuth";
import { NoImage, SERVER_URL } from "../../Consts/Consts";
import {
  useEditPostMutation,
  useCreatePostMutation,
  useUploadImageMutation,
  useDeleteImageMutation,
} from "../../Services/ApiPost";
import * as S from "./ModalStyle";

export const RenderModal = ({
  isVisible = false,
  onClose,
  content,
  loading,
  action,
}) => {
  const dispatch = useDispatch();
  const keydownHandler = ({ key }) => {
    switch (key) {
      case "Escape":
        onClose();
        break;
      default:
    }
  };
  const history = useNavigate();
  const [editPost, { isLoading, error }] = useEditPostMutation();
  const [createPost] = useCreatePostMutation();
  const [createImage, { isLoading: isLoadingImageUpload }] =
    useUploadImageMutation();
  const [deleteImage, { isLoading: isLoadingImageDelete }] =
    useDeleteImageMutation();
  const [post, setPost] = useState();
  const [image, setImage] = useState([]);
  const [index, setIndex] = useState(0);
  const [arrayImage, setArrayImage] = useState([]);
  const countContent = content?.images.length;
  const count = countContent + index;

  const uploadImg = (se) => {
    const input = se.target;
    if (input.files && input.files[0]) {
      if (input.files[0].type.match("image.*")) {
        const reader = new FileReader();
        reader.onload = function (e) {
          setImage([...image, e.target.result]);
        };
        reader.readAsDataURL(input.files[0]);
      } else {
        console.log("ошибка, не изображение");
      }
      setIndex(index + 1);
    } else {
      console.log("хьюстон у нас проблема");
    }
  };
  const removeImage = (param) => {
    const filterImages = image.filter((_, i) => i !== param);

    setImage(filterImages);
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
    if (result.data) {
      onClose();
      history(`/article/${result.data.id}`);
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
    if (!action && isVisible) {
      createImage({ arrayImage, post });
    }
  }, [arrayImage, createImage]);

  useEffect(() => {
    document.addEventListener("keydown", keydownHandler);
    return () => document.removeEventListener("keydown", keydownHandler);
  });
  useEffect(() => {
    console.log(image);
  }, [image, index]);

  useEffect(() => {
    dispatch(setIsState(isLoading));
  }, [dispatch, isLoading]);
  useEffect(() => {
    dispatch(setIsState(isLoadingImageUpload));
  }, [dispatch, isLoadingImageUpload]);
  useEffect(() => {
    dispatch(setIsState(isLoadingImageDelete));
  }, [dispatch, isLoadingImageDelete]);
  return !isVisible ? null : (
    <S.Wrapper>
      <S.ContainerBg>
        <S.ModalBlock>
          <S.ModalContent>
            <S.ModalTitle onClick={onClose}>
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
                    content?.images.map(({ url, ad_id: postId }) => (
                      <S.BarImg key={Math.random()}>
                        {loading && !action ? (
                          <Skeleton height="100%" width="100%" />
                        ) : (
                          <S.BarImgImg
                            src={`${SERVER_URL}${url}` || `${NoImage}`}
                            key={Math.random()}
                          />
                        )}
                        <S.ImgCoverDelete
                          key={Math.random()}
                          onClick={() => {
                            deleteImage({ url, postId });
                          }}
                        ></S.ImgCoverDelete>
                        {/* <S.ImgCover></S.ImgCover> */}
                      </S.BarImg>
                    ))
                  )}
                  {Array.from({ length: index }, (_, indexs) => (
                    <S.BarImg key={Math.random()}>
                      <S.BarImgImg key={Math.random()} src={image[indexs]} />
                      <S.ImgCoverDelete
                        key={Math.random()}
                        onClick={() => {
                          /*  setImage([ ...image, delete image.indexs ]});  */
                          removeImage(indexs);
                          /*  setImage(...image, [delete image[indexs]]); */
                          setIndex(index - 1);
                        }}
                      ></S.ImgCoverDelete>
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
                              /* uploadImg(e); */
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
              <S.FormButton type="submit">Сохранить</S.FormButton>
            </S.ModalForm>
          </S.ModalContent>
        </S.ModalBlock>
      </S.ContainerBg>
    </S.Wrapper>
  );
};
