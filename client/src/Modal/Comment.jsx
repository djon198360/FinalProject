import { useEffect, useState } from "react";
import { useCreateCommentMutation } from "../Services/ApiPost";
import { RenderCommentItem } from "../Components/CommentBody/CommentItem";
import * as S from "./CommentStyle";

export const RenderComment = ({
  isVisible = false,
  onClose,
  content,
  idPost,
}) => {
  const keydownHandler = ({ key }) => {
    switch (key) {
      case "Escape":
        onClose();
        break;
      default:
    }
  };
  const [text, setText] = useState();
  const [addComment /* , { data, isLoading } */] = useCreateCommentMutation();

  useEffect(() => {
    document.addEventListener("keydown", keydownHandler);
    return () => document.removeEventListener("keydown", keydownHandler);
  });

  const setAddComment = (e) => {
    console.log(text);
    e.preventDefault();
    addComment({ idPost, text });
  };
  return !isVisible ? null : (
    <S.Wrapper>
      <S.ContainerBg>
        <S.ModalBlock>
          <S.ModalContent>
            <S.ModalTitle>Отзывы о товаре </S.ModalTitle>
            <S.ModalClose>
              <S.ModalCloseLine onClick={onClose}></S.ModalCloseLine>
            </S.ModalClose>
            <S.ModalScroll>
              <S.ModalForm
                onSubmit={(e) => {
                  setAddComment(e);
                }}
              >
                <S.FormBlock>
                  <S.FormLabel>Добавить отзыв</S.FormLabel>
                  <S.FormTextArea
                    name="text"
                    id="formArea"
                    cols="auto"
                    rows="5"
                    placeholder="Введите описание"
                    onChange={(e) => {
                      setText(e.target.value);
                    }}
                  ></S.FormTextArea>
                </S.FormBlock>
                <S.FormButton>Опубликовать</S.FormButton>
              </S.ModalForm>
              <S.ModalBody>
                {content
                  ? content.map((comment) => (
                      <RenderCommentItem comment={comment}>
                        {comment}
                      </RenderCommentItem>
                    ))
                  : null}
              </S.ModalBody>
            </S.ModalScroll>
          </S.ModalContent>
        </S.ModalBlock>
      </S.ContainerBg>
    </S.Wrapper>
  );
};
