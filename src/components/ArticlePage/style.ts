import styled from "styled-components";
import { mobile } from "../../constants";

export const ContainerDataView = styled.div`
  display: flex;
  gap: 20px;

  div {
    display: flex;
    gap: 8px;
  }
`;
export const TextHeaderGrey = styled.p`
  color: rgb(128, 128, 128);
  font-weight: 500;
  font-size: 16px;
  margin: 5;
`;

export const ArticlePageImageContainer = styled.div`
  position: relative;
  width: auto;
  height: max-content;
`;

export const ArticlePageImage = styled.img`
  flex: 0 0 auto;
  height: auto;
  border-radius: 8px;
  height: 100%;
  width: 100%;
`;

export const TitleTextArticlePage = styled.h1`
  font-size: 40px;
  padding-top: 12px;
  margin: 0;
  line-height: 44px;

  @media (max-width: ${mobile}) {
    font-size: 28px;
    line-height: 34px;
  }
`;

export const SubTitleTextArticlePage = styled.h2`
  font-size: 20px;
  padding: 16px 0 24px 0;
  font-weight: 400;
  line-height: 28px;
  margin: 0;

  @media (max-width: ${mobile}) {
    font-size: 18px;
    line-height: 24px;
  }
`;

export const FigcaptionImage = styled.figcaption`
  color: rgb(128, 128, 128);
  font-size: 14px;
  line-height: 16px;
  padding-top: 8px;
`;

export const ContainerSubTitleText = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 18px;
  color: rgb(15, 23, 42);
  display: block;

  @media (max-width: ${mobile}) {
    font-size: 16px;
  }
`;
