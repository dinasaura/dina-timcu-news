import React from "react";
import {
  ArticleItem,
  ArticleListImage,
  ContainerForArticle,
  StyledLink,
  ArticleInfo,
  SubtitleText,
} from "../ArticlesList/style";
import { imageLinksPrefix } from "../../constants";
import { TextGrey } from "../../style";

const ArticleItems = ({ articles }) => {
  return (
    <ContainerForArticle>
      {articles.map((article) => (
        <ArticleItem key={article.id}>
          <StyledLink to={`/article/${article.id}`}>
            <ArticleListImage
              src={imageLinksPrefix.articleSmall + article.thumbnail}
              alt="Article Image"
            />
          </StyledLink>
          <ArticleInfo>
            <StyledLink to={`/article/${article.id}`}>
              <h3>{article.title.short}</h3>
            </StyledLink>
            <SubtitleText>{article.description.intro}</SubtitleText>
            <TextGrey>{article.dates.updated}</TextGrey>
          </ArticleInfo>
        </ArticleItem>
      ))}
    </ContainerForArticle>
  );
};

export default ArticleItems;
