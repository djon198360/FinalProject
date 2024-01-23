import { formatDateComment } from "../../assets/utils";
import { NoImage, SERVER_URL } from "../../Consts/Consts";
import * as S from "./Style";

export const RenderCommentItem = ({ comment }) => {
  console.log(comment);
  return (
    <S.ItemBody>
      <S.Item>
        <S.Left>
          <S.ImgDiv>
            <S.Img
              src={
                comment.author.avatar
                  ? `${SERVER_URL}${comment.author.avatar}`
                  : `${SERVER_URL}${NoImage}`
              }
            />
          </S.ImgDiv>
        </S.Left>
        <S.Right>
          <S.Name>
            {comment.author.name}
            <S.NameSpan>{formatDateComment(comment.created_on)}</S.NameSpan>
            <S.H5>Комментарий</S.H5>
            <S.P>{comment.text}</S.P>
          </S.Name>
        </S.Right>
      </S.Item>
    </S.ItemBody>
  );
};
