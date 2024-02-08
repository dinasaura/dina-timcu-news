import styled from "styled-components";
import { Link } from "react-router-dom";
import { mobile, mobileMini, tablet } from "../../constants";

export const ArticleItem = styled.li`
  display: flex;
  margin-bottom: 20px;
`;

export const ArticleListImage = styled.img`
  flex: 0 0 auto;
  width: 240px;
  height: auto;
  margin-right: 20px;
  border-radius: 4px;
  cursor: pointer;

  @media (max-width: ${mobile}) {
    width: 144px;
  }
`;

export const ArticleInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  transition: color 0.1s ease;
  line-height: 1.2;
  text-size-adjust: 100%;

  &:hover {
    color: rgb(255, 71, 0);
  }

  h3 {
    margin: 0;
    font-size: 24px;
    line-height: 26px;
    text-align: left;
    text-size-adjust: 100%;
    letter-spacing: normal;
    padding-bottom: 10px;
  }

  @media (max-width: ${tablet}) {
    h3 {
      font-size: 20px;
    }
  }

  @media (max-width: ${mobile}) {
    h3 {
      font-size: 14px;
      line-height: 16px;
    }
  }

  @media (max-width: ${mobileMini}) {
    h3 {
      font-size: 12px;
      line-height: 14px;
      font-weight: 100;
    }
  }
`;

export const ContainerForArticle = styled.ul`
  padding: 1px;
`;

export const SubtitleText = styled.ul`
  color: rgb(15, 23, 42);
  font-size: 16px;
  padding: 0;

  @media (max-width: ${tablet}) {
    display: none;
  }
`;
