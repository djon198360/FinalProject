import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

*:before,
*:after {
  box-sizing: border-box;
}

a,
a:visited {
  text-decoration: none;
  font-family: "StratosSkyeng", sans-serif;
  cursor: pointer;
}

button,
._btn {
  cursor: pointer;
}

ul li {
  list-style: none;
}

html,
body {
  width: 100%;
  height: 100%;
  font-family: "Roboto", sans-serif;
  color: #000000;
}

div,
button,
a {
  font-family: "Roboto", sans-serif;
}
/* button[type="button"]:disabled {
  background:  #D9D9D9;
    border: 1px solid #D9D9D9;
     &:hover{   background:  #D9D9D9;
      border: 1px solid #D9D9D9;}
    } */
    
@font-face {
  font-family: "StratosSkyeng";
  src: local("StratosSkyeng"), local("StratosSkyeng"),
    url("../fonts/StratosSkyeng.woff2") format("woff2"),
    url("../fonts/StratosSkyeng.woff") format("woff");
  font-style: normal;
  font-family: "Roboto";
  src: local("Roboto"), local("Roboto"),
    url("../fonts/Roboto.ttf") format("ttf");
    font-style: normal;
    font-weight: 400;
}
`;
