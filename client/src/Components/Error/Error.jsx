import { lang } from "../../assets/Language";

export const RenderError = ({ error }) => {
  return <h2>{lang[error] ? lang[error] : "неизвестная ошибка"}</h2>;
};
