import { formatRelative, subDays /* formatDistanceToNow */ } from "date-fns";
import { ru } from "date-fns/locale";

const EMAIL_REGEXP =
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

export const formateDate = (date) => {
  return formatRelative(subDays(date, 0), new Date(), { locale: ru });
  /* return formatDistanceToNow(new Date(date)); */
};

export const searchPosts = (searchValueText, list) =>
  list.filter(
    ({ title, description }) =>
      title?.toLowerCase().includes(searchValueText.toLowerCase()) ||
      description?.toLowerCase().includes(searchValueText.toLowerCase())
  );

export const validInput = (params) => {
  let result = {};
  console.log(params);
  if (params.email) {
    result = EMAIL_REGEXP.test(params.email)
      ? { validate: true, color: "green", text: params.email }
      : { validate: false, color: "red", text: params.email };
    console.log(result);
  } else if (params.password) {
    const minLength = 8;
    result =
      params?.password.length >= minLength
        ? { validate: true, color: "green", text: params.password }
        : { validate: false, color: "red", text: params.password };
  } else if (params.passwordRepeat) {
    result =
      params?.loginValue.password.text === params?.passwordRepeat
        ? { validate: true, color: "green", text: params.passwordRepeat }
        : { validate: false, color: "red", text: params.passwordRepeat };
  } else if (!params.email && !params.password && !params.passwordRepeat) {
    result = {
      validate: true,
      color: "green",
      text: null || params.name || params.family || params.city,
    };
  }
  return result;
};
