import React from "react";
import {
  ArticleListImage,
  StyledLink,
  ArticleInfo,
  SubtitleText,
  ContainerForItem,
} from "../ArticlesList/style";
import { imageLinksPrefix } from "../../constants";
import { TextGrey } from "../../style";
import { Content } from "../../__generated__/graphql";

interface Props {
  article : Content;
}

const ArticleItem: React.FC<Props> = ({ article }) => {
  return (
    <ContainerForItem key={article.id}>
      <StyledLink to={`/article/${article.id}`}>
        <ArticleListImage
          src={imageLinksPrefix.articleSmall + article.thumbnail}
          alt={article?.title?.short}
        />
      </StyledLink>
      <ArticleInfo>
        <StyledLink to={`/article/${article.id}`}>
          <h3>{article?.title?.short}</h3>
        </StyledLink>
        <SubtitleText>{article?.description?.intro}</SubtitleText>
        <TextGrey>{article?.dates?.updated}</TextGrey>
      </ArticleInfo>
    </ContainerForItem>
  );
};

export default ArticleItem;
