import { useState /* , useEffect */ } from "react";
import { useParams } from "react-router-dom";
import {
  useGetAllPostsQuery,
  useUserGetAllQuery,
  refreshToken,
} from "../../Services/ApiPost";
import { NoImage, SERVER_URL } from "../../Consts/Consts";
import { RenderHeadBack } from "../../Components/HeadBack/Back";
import { RenderCardItem } from "../../Components/Cards/CardsItem";
import {
  formatDateMonth,
  hidePhone,
  userSearchId,
} from "../../assets/helpFunc";
import * as S from "./Style";

export const SellerProfile = () => {
  let userDataId = "";
  const [hide, setHide] = useState(true);
  const { id: ids } = useParams();
  const {
    data: dataPost,
    isLoading: isLoadingPost,
    error: errorPost,
  } = useGetAllPostsQuery({
    user_id: ids,
    sorting: "new",
  });

  const {
    data,
    error,
    refetch: refetchUser,
  } = useUserGetAllQuery({
    id: ids,
  });
  if (error && error.status === 401) {
    refreshToken(() => refetchUser());
  }

  if (data) {
    userDataId = userSearchId({ data, ids });
  }

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
        <S.CenterBlock>
          <RenderHeadBack />
          <S.MainTitleH2>Профиль продавца</S.MainTitleH2>
          <S.ProfileSell>
            <S.Content>
              <S.ProfileSeller>
                <S.SellerLeft>
                  <S.SellerImgDiv>
                    <S.SellerImg
                      src={
                        userDataId && userDataId.avatar != null
                          ? SERVER_URL + userDataId.avatar
                          : SERVER_URL + NoImage
                      }
                      alt=""
                    />
                  </S.SellerImgDiv>
                </S.SellerLeft>
                <S.SellerRight>
                  <S.RightTitleH3>
                    {userDataId && userDataId.name != null
                      ? userDataId.name
                      : "Имя неизвестно"}
                  </S.RightTitleH3>
                  <S.RightCity>
                    {" "}
                    {userDataId && userDataId.city != null
                      ? userDataId.city
                      : "Неизвестно"}
                  </S.RightCity>
                  <S.RightInf>
                    {userDataId && userDataId.sells_from != null
                      ? `Продает товары с ${formatDateMonth(
                          userDataId.sells_from
                        )}`
                      : "Продает товары "}
                  </S.RightInf>
                  <S.PhoneButton onClick={() => handleHideShowPhone()}>
                    {hide ? "Показать телефон" : "Скрыть телефон"}
                    <S.PhoneButtonSpan>
                      {hide
                        ? hidePhone(userDataId.phone)
                        : userDataId.phone.replace(
                            /(\d{1,4})(\d{3})(\d{3})(\d{2})(\d{2})/,
                            "+7 ($2) $3-$4-$5"
                          )}
                    </S.PhoneButtonSpan>
                  </S.PhoneButton>
                </S.SellerRight>
              </S.ProfileSeller>
            </S.Content>
          </S.ProfileSell>
          <S.MainTitleH3>Товары продавца</S.MainTitleH3>
        </S.CenterBlock>
        <S.MainContent>
          <S.MainCards>
            {errorPost ? "Error" : null}
            {isLoadingPost
              ? "Идет загрузка.."
              : dataPost.map((post) => (
                  <RenderCardItem post={post} key={post.id}></RenderCardItem>
                ))}
          </S.MainCards>
        </S.MainContent>
      </S.Container>
    </S.Main>
  );
};
