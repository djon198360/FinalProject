import { useState, useEffect } from "react";
import { RenderHeadBack } from "../../Components/HeadBack/Back";
import { NoImage, SERVER_URL } from "../../Consts/Consts";
import {
  refreshToken,
  useUserGetQuery,
  useGetAllMyPostQuery,
  useSetEditMyInfoMutation,
} from "../../Services/ApiPost";
import { RenderCardItem } from "../../Components/Cards/CardsItem";
import * as S from "./Style";

export const Profile = () => {
  let userInfoData = "";
  const { data, isLoading, error, refetch: refetchUser } = useUserGetQuery();
  if (error && error.status === 401) {
    // refreshToken(() => refetchUser());
    refetchUser();
  }
  const [userInfo, setUserInfo] = useState({
    avatar: data?.avatar || NoImage,
    name: data?.name || "NoName",
    surname: data?.surname || "Неизвестна",
    city: data?.city || "Неизвестен",
    phone: data?.phone || "",
  });
  const {
    data: dataPost,
    isLoading: isLoadingPost,
    error: errorPost,
    refetch: refetchUserPost,
  } = useGetAllMyPostQuery();

  if (errorPost) {
    //  refreshToken(() => refetchUserPost);
    refetchUserPost();
  }

  const [editInfo, { isLoadings, errors }] = useSetEditMyInfoMutation();
  const UpdateInputValue = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };
  const ValidPhone = (e) => {
    const resultInput = e.target.value
      .replace(/[^0-9+]/g, "")
      .replace(/\D+/g, "")
      .replace(/(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/, "+7 ($2) $3-$4-$5");

    setUserInfo({
      ...userInfo,
      [e.target.name]: resultInput,
    });
  };

  const setEditInfo = async () => {
    const result = await editInfo(userInfo);
    return result;
  };
  if (data) {
    userInfoData = data;
  }

  useEffect(() => {}, [isLoading]);

  return (
    <S.Main>
      <S.Container>
        <S.CenterBlock>
          <RenderHeadBack />
          <S.TitleH2>
            Здравствуйте, {userInfoData ? userInfoData.name : "Нет имени"} !
          </S.TitleH2>
          <S.Profile>
            <S.Content>
              <S.ProfileTitleH3>Настройки профиля</S.ProfileTitleH3>
              <S.Settings>
                <S.Left>
                  <S.Avatar>
                    <S.AvatarImg
                      src={
                        userInfo
                          ? SERVER_URL + userInfo.avatar
                          : SERVER_URL + NoImage
                      }
                      alt={userInfoData ? userInfoData.name : "Нет имени"}
                    ></S.AvatarImg>
                  </S.Avatar>
                  <S.AvatarSettingLink
                    onClick={() => {
                      refreshToken();
                    }}
                  >
                    Заменить
                  </S.AvatarSettingLink>
                </S.Left>
                <S.Right>
                  <S.SettingsForm>
                    <S.SettingDiv>
                      <S.Label for="name">Имя</S.Label>
                      <S.Fname
                        type="text"
                        value={userInfo ? userInfo.name : "Неуказано"}
                        onChange={(e) => {
                          UpdateInputValue(e);
                        }}
                        name="name"
                      />
                    </S.SettingDiv>
                    <S.SettingDiv>
                      <S.Label for="surname">Фамилия</S.Label>
                      <S.Lname
                        type="text"
                        value={userInfo ? userInfo.surname : "Неуказана"}
                        onChange={(e) => {
                          UpdateInputValue(e);
                        }}
                        name="surname"
                      />
                    </S.SettingDiv>
                    <S.SettingDiv>
                      <S.Label for="city">Город</S.Label>
                      <S.City
                        type="text"
                        value={userInfo ? userInfo.city : "Неуказан"}
                        onChange={(e) => {
                          UpdateInputValue(e);
                        }}
                        name="city"
                      />
                    </S.SettingDiv>
                    <S.SettingDiv>
                      <S.Label for="phone">Телефон</S.Label>
                      <S.Phone
                        type="tel"
                        value={userInfo ? userInfo.phone : "Неуказан"}
                        onChange={(e) => {
                          ValidPhone(e);
                        }}
                        maxlength="13"
                        minlength="5"
                        placeholder="Номер телефона РФ"
                        name="phone"
                      />
                    </S.SettingDiv>
                    <S.Button
                      onClick={() => {
                        setEditInfo();
                      }}
                      type="button"
                    >
                      {errors || error || errorPost ? "Error" : null}
                      {isLoadings ? "Отправка данных" : "Сохранить"}
                    </S.Button>
                  </S.SettingsForm>
                </S.Right>
              </S.Settings>
            </S.Content>
          </S.Profile>
        </S.CenterBlock>
        <S.ProfileTitleH3>Мои товары</S.ProfileTitleH3>
        <S.MainContent>
          <S.MainCards>
            {errorPost ? "Error" : null}
            {!isLoadingPost && dataPost && !errorPost
              ? dataPost.map((post) => (
                  <RenderCardItem post={post} key={post.id}></RenderCardItem>
                ))
              : "Идет загрузка.."}
          </S.MainCards>
        </S.MainContent>
      </S.Container>
    </S.Main>
  );
};
