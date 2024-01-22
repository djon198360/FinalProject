import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Skeleton /* { SkeletonTheme } */ from "react-loading-skeleton";
import { RenderHeadBack } from "../../Components/HeadBack/Back";
import { NoImage, SERVER_URL } from "../../Consts/Consts";
import {
  useGetUserQuery,
  useUpdateUserMutation,
  useUploadAvatarMutation,
} from "../../Services/ApiUser";
import { useGetAllMyPostQuery } from "../../Services/ApiPost";
import { RenderCardItem } from "../../Components/Cards/CardsItem";
import { RenderHeaderMob } from "../../Components/HeaderMob/HeaderMob";
import * as S from "./Style";

export const Profile = () => {
  let userInfoData = useSelector((state) => state.SliceAuth);
  const { data, isLoading, error /* , refetch: getUser */ } = useGetUserQuery();
  const [editInfo, { isLoading: isLoadings, error: errors }] =
    useUpdateUserMutation();
  const [upload] = useUploadAvatarMutation();

  // Загрузка аватарки
  const uploadAvatar = (e) => {
    const avatarData = new FormData();
    if (e.target.files[0]) {
      avatarData.append("file", e.target.files[0]);
      upload(avatarData);
      e.target.value = null;
    }
  };

  const [userInfo, setUserInfo] = useState();
  const {
    data: dataPost,
    isLoading: isLoadingPost,
    error: errorPost,
    /* refetch: refetchUserPost, */
  } = useGetAllMyPostQuery();
  const isEmptyPost = !isLoadingPost && !dataPost?.length;
  if (errorPost) {
    //  refreshToken(() => refetchUserPost);
    /*  refetchUserPost(); */
  }

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

  const setEditInfo = async (e) => {
    e.preventDefault();
    const result = await editInfo(userInfo);
    return result;
  };

  useEffect(() => {
    setUserInfo(data);
  }, [data]);

  userInfoData = userInfo;
  return (
    <>
      <RenderHeaderMob />
      <S.Main>
        <S.Container>
          <S.CenterBlock>
            <RenderHeadBack />
            <S.TitleH2>
              {isLoading && !error ? (
                <Skeleton />
              ) : (
                `Здравствуйте, ${userInfoData?.name || "NoName"}!`
              )}
            </S.TitleH2>
            <S.Profile>
              <S.Content>
                <S.ProfileTitleH3>Настройки профиля</S.ProfileTitleH3>
                <S.Settings>
                  <S.Left>
                    <S.Avatar>
                      {isLoading && !error ? (
                        <Skeleton height="100%" width="100%" circle />
                      ) : (
                        <S.AvatarImg
                          src={
                            userInfo && userInfo.avatar
                              ? SERVER_URL + userInfo.avatar
                              : SERVER_URL + NoImage
                          }
                          alt={userInfoData ? userInfoData.name : "Нет имени"}
                        ></S.AvatarImg>
                      )}
                    </S.Avatar>
                    <S.UploadLabel htmlFor="uploadAvatar">
                      Заменить
                      <S.UploadAvatarInput
                        accept="image/*"
                        type="file"
                        id="uploadAvatar"
                        name="uploadAvatar"
                        onChange={(e) => {
                          uploadAvatar(e);
                        }}
                      />
                    </S.UploadLabel>
                  </S.Left>
                  <S.Right>
                    <S.SettingsForm
                      onSubmit={(e) => {
                        setEditInfo(e);
                      }}
                    >
                      <S.SettingDiv>
                        <S.Label htmlFor="name">Имя</S.Label>
                        <S.Fname
                          type="text"
                          value={userInfo ? userInfo.name : ""}
                          onChange={(e) => {
                            UpdateInputValue(e);
                          }}
                          name="name"
                        />
                      </S.SettingDiv>
                      <S.SettingDiv>
                        <S.Label htmlFor="surname">Фамилия</S.Label>
                        <S.Lname
                          type="text"
                          value={userInfo ? userInfo.surname : ""}
                          onChange={(e) => {
                            UpdateInputValue(e);
                          }}
                          name="surname"
                        />
                      </S.SettingDiv>
                      <S.SettingDiv>
                        <S.Label htmlFor="city">Город</S.Label>
                        <S.City
                          type="text"
                          value={userInfo ? userInfo?.city : ""}
                          onChange={(e) => {
                            UpdateInputValue(e);
                          }}
                          name="city"
                        />
                      </S.SettingDiv>
                      <S.SettingDiv>
                        <S.Label htmlFor="phone">Телефон</S.Label>
                        <S.Phone
                          type="tel"
                          value={userInfo ? userInfo?.phone : ""}
                          onChange={(e) => {
                            ValidPhone(e);
                          }}
                          $maxlength="13"
                          $minlength="5"
                          placeholder="Номер телефона РФ"
                          name="phone"
                        />
                      </S.SettingDiv>
                      <S.Button
                        type="submit"
                        disabled={isLoadings || isLoading}
                      >
                        {isLoadings ? "Отправка данных" : "Сохранить"}
                      </S.Button>
                    </S.SettingsForm>
                    {errors || error || errorPost ? "Error" : null}
                  </S.Right>
                </S.Settings>
              </S.Content>
            </S.Profile>
            <S.ProfileTitleH3>Мои товары</S.ProfileTitleH3>
          </S.CenterBlock>
          <S.MainContent>
            <S.MainCards>
              {!isLoadingPost && dataPost && !errorPost
                ? dataPost.map((post) => (
                    <RenderCardItem post={post} key={post.id}></RenderCardItem>
                  ))
                : "Идет загрузка.."}
              {isEmptyPost ? "У вас нет объявлений" : null}
            </S.MainCards>
          </S.MainContent>
        </S.Container>
      </S.Main>
    </>
  );
};
