import { Link } from "react-router-dom";
import * as S from "./Style";
import { SERVER_URL } from "../../Consts/Consts";
import { formatDateWeek } from "../../assets/utils";

export const RenderCardItem = (props) => {
  const { post } = props;
  const { id, title, description, price, user, images } = post;
  const NoImage = `${SERVER_URL}ad_images/7387030e5a5600726e5309496353969a_t.jpeg`;
  const image = images[0] ? SERVER_URL + images[0].url : NoImage;
  return (
    <S.CardItem id={id}>
      <S.CardBody>
        <S.CardImage>
          <Link to={`/article/${id}`}>
            <S.Image src={image} alt={title} title={description} />
          </Link>
        </S.CardImage>
        <S.CardContent>
          <Link to={`/article/${id}`}>
            <S.CardTitleH3 to={`/article/${id}`}>{title}</S.CardTitleH3>
          </Link>

          <S.CardPrice>{price.toLocaleString("ru-RU")} ₽</S.CardPrice>
          <S.CardPlace>{user.city}</S.CardPlace>
          <S.CardDate>{formatDateWeek(post.created_on)}</S.CardDate>
        </S.CardContent>
      </S.CardBody>
    </S.CardItem>
  );
};
