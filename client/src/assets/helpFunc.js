import { formatRelative, subDays /* formatDistanceToNow */ } from "date-fns";
import { ru } from "date-fns/locale";

const EMAIL_REGEXP =
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

const PHONE_REGEXP = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){11,14}(\s*)?$/iu;
export const formateDate = (date) => {
  return formatRelative(subDays(date, 0), new Date(), { locale: ru });
  /* return formatDistanceToNow(new Date(date)); */
};

export const hidePhone = (phone) => {
  if (phone) {
    const hide = " XXX XX XX";
    /*  console.log(phone?.substring(0, 3)); */
    return phone.substring(0, phone.length - 7) + hide;
  }
  return null;
};

export const searchPosts = (searchValueText, list) =>
  list.filter(
    ({ title, description }) =>
      title?.toLowerCase().includes(searchValueText.toLowerCase()) ||
      description?.toLowerCase().includes(searchValueText.toLowerCase())
  );

export const ValidProfileInput = (params) => {
  let result = {};
  if (params.phone) {
    console.log(params.phone);
    /*     resultInput = resultInput
      .replace(/\D+/g, "")
      .replace(/(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/, "+7 ($2) $3-$4-$5"); */
    result = PHONE_REGEXP.test(params.phone) ? params.phone : null;
  }
  if (params.name) {
    const minLength = 2;
    result = params?.name.length >= minLength ? params.name : "";
  }
  if (params.surname) {
    const minLength = 2;
    result = params?.surname.length >= minLength ? params.surname : "";
  }
  if (params.city) {
    const minLength = 2;
    result = params?.city.length >= minLength ? params.city : "";
  }
  console.log(result);
  return result;
};

export const validInput = (params) => {
  let result = {};
  if (params.email) {
    result = EMAIL_REGEXP.test(params.email)
      ? { validate: true, color: "green", text: params.email }
      : { validate: false, color: "red", text: params.email };
  } else if (params.password) {
    const minLength = 8;
    result =
      params.password === params?.loginValue.passwordRepeat.text ||
      params?.password.length >= minLength
        ? { validate: true, color: "green", text: params.password }
        : { validate: false, color: "red", text: params.password };
  } else if (params.passwordRepeat) {
    result =
      params?.loginValue.password.text === params?.passwordRepeat
        ? { validate: true, color: "green", text: params.passwordRepeat }
        : { validate: false, color: "red", text: params.passwordRepeat };
  } else if (params.name) {
    const minLength = 2;
    result =
      params?.name.length >= minLength
        ? { validate: true, color: "green", text: params.name }
        : { validate: false, color: "red", text: params.name };
  } else if (params.surname) {
    const minLength = 2;
    result =
      params?.surname.length >= minLength
        ? { validate: true, color: "green", text: params.surname }
        : { validate: false, color: "red", text: params.surname };
  } else if (params.city) {
    const minLength = 2;
    result =
      params?.city.length >= minLength
        ? { validate: true, color: "green", text: params.city }
        : { validate: false, color: "red", text: params.city };
  }
  return result;
};
