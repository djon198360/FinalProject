import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { RenderHeadBack } from "../../Components/HeadBack/Back";
import { RenderMain } from "../../Components/Main/Main";
/* import { RenderModal } from "../../Modal/Modal"; */
/* import { SERVER_URL } from "../../Consts/Consts"; */
import {
  useGetPostIdQuery,
  useGetAllCommentsQuery,
} from "../../Services/ApiPost";

export const MyArticle = () => {
  const history = useNavigate();
  /* const isAuth = true; */
  /*   const idUser = localStorage.getItem("id");
  const [hide, setHide] = useState(true); */
  const [datas, setDatas] = useState();
  /*   const [isModal, setModal] = useState(false); */
  const { id: ids } = useParams();
  const { data, isLoading, error } = useGetPostIdQuery(ids);
  const { data: dataComment } = useGetAllCommentsQuery(ids);
  useEffect(() => {
    setDatas(data);
  }, [data]);
  if (error?.status === 404) {
    history(`/404`);
  }
  return (
    <RenderMain
      headerBack={<RenderHeadBack />}
      content={datas}
      loading={isLoading}
      error={error}
      history={history}
      id={ids}
      datacomment={dataComment}
    ></RenderMain>
  );
};
