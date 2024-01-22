/* import { formatRelative, subDays  } from "date-fns";
import { ru } from "date-fns/locale"; */

const EMAIL_REGEXP =
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

const PHONE_REGEXP = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){11,14}(\s*)?$/iu;

export const formatDateWeek = (date) => {
  const formatDate = new Intl.DateTimeFormat("ru", {
    weekday: "long",
    hour: "numeric",
    minute: "numeric",
  });
  return formatDate.format(new Date(date));
};

export const formatDateComment = (date) => {
  const formatDate = new Intl.DateTimeFormat("ru", {
    day: "numeric",
    month: "long",
  });
  return formatDate.format(new Date(date));
};

export const formatDateMonth = (date) => {
  const formatDate = new Intl.DateTimeFormat("ru", {
    month: "long",
    year: "numeric",
  });
  return formatDate.format(new Date(date));
};

export const hidePhone = (phone) => {
  if (phone) {
    const hide = " XXX XX XX";
    const phones = phone.replace(
      /(\d{1,4})(\d{3})(\d{3})(\d{2})(\d{2})/,
      "+7 ($2) $3-$4-$5"
    );
    /*  console.log(phone?.substring(0, 3)); */
    return phones.substring(0, phones.length - 9) + hide;
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

export const createQuery = (params) => {
  const searchQuery = new URLSearchParams();
  Object.entries(params).map(([key, value]) =>
    value !== undefined ? searchQuery.set(key, String(value)) : null
  );
  return searchQuery.toString();
};

export const userSearchId = (params) => {
  console.log(params);
  // const userIdArray = params.data.find(({ user }) => user === params.ids);
  const userIdArray = params?.data.filter(({ id }) => params.ids.includes(id));
  console.log(userIdArray[0]);
  return userIdArray[0];
};
