export const MAIN_ROUTE = "/";
export const PROFILE_ROUTE = "/profile";
export const SELLER_PROFILE_ROUTE = "/seller-profile";
export const ARTICLE_ROUTE = "/article";
export const NOT_FOUND_ROUTE = "*";
export const SERVER_URL = "http://localhost:8090/";
export const isAuth = localStorage?.getItem("isAuth")
  ? JSON.parse(localStorage.getItem("isAuth"))
  : false;
export const NoImage = `ad_images/7387030e5a5600726e5309496353969a_t.jpeg`;
/* const userLocal = localStorage?.getItem("user")? JSON.parse(localStorage.getItem("user")).isAuth: false;
 */
