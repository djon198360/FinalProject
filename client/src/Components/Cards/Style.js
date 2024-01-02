import styled from "styled-components";

export const CardItem = styled.div``;

export const CardBody = styled.div`
  width: 270px;
  height: 441px;
  display: flex;
  flex-direction: column;
`;

export const CardImage = styled.div`
  width: 270px;
  height: 270px;
  background-color: #f0f0f0;
`;

export const A = styled.a.attrs((props) => ({
  href: props.href,
  title: props.title,
}))``;

export const Image = styled.img.attrs((props) => ({
  src: props.src,
  alt: props.alt,
}))`
  width: 100%;
  height: 100%;
  display: block;
  -o-object-fit: cover;
  object-fit: cover;
`;

export const CardContent = styled.div``;

export const CardTitleH3 = styled.h3`
  height: 52px;
  font-size: 22px;
  font-weight: 500;
  line-height: 26px;
  color: #009ee4;
  margin-bottom: 10px;
  margin-top: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const P = styled.p`
  color: #000000;
  font-size: 22px;
  font-weight: 500;
  line-height: 33px;
`;

export const CardPrice = styled(P)`
  margin-bottom: 10px;
`;
export const CardPlace = styled(P)`
  font-size: 16px;
  line-height: 21px;
  color: #5f5f5f;
  margin-bottom: 4px;
`;

export const CardDate = styled(P)`
  font-size: 16px;
  line-height: 21px;
  color: #5f5f5f;
`;
