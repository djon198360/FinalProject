import { RenderHeadBack } from "../../Components/HeadBack/Back";
import { RenderHeaderMob } from "../../Components/HeaderMob/HeaderMob";

export const NotFound = () => {
  return (
    <>
      <RenderHeaderMob />
      <RenderHeadBack />
      <h2
        style={{
          margin: "5rem , 5rem",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        Данная страницы не существует, или она была удалена, или введен неверный
        адрес !
      </h2>
    </>
  );
};
