import React from "react";
import { useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import { ArticleContainer } from "../Container/Container";
import {
  ArticlePageImage,
  ArticlePageImageContainer,
  ContainerDataView,
  ContainerSubTitleText,
  FigcaptionImage,
  SubTitleTextArticlePage,
  TextHeaderGrey,
  TitleTextArticlePage,
} from "./style";
import { imageLinksPrefix, projectId } from "../../constants";


const GET_ARTICLE = gql`
  query GetArticle($articleId: String!) {
    content(
      project_id: "${projectId}"
      lang: "ru"
      id: $articleId
      ) {
      id
      title {
        short
        long
      }
      thumbnail
      description {
        intro
        thumbnail
        long
      }
      dates {
        updated: updated(format: "mm", lang: "ru", getDiff: true)
      }
      counters {
        view
      }
    }
  }
`;

const ArticlePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  

  const { loading, error, data } = useQuery(GET_ARTICLE, {
    variables: { articleId: id },
  });

  if (loading) return <ArticleContainer>Loading...</ArticleContainer>;
  if (error) return <ArticleContainer>Error: {error.message}</ArticleContainer>;

  const article = data?.content;


  return (
      <ArticleContainer>
        <ContainerDataView>
          <TextHeaderGrey>{article.dates.updated}</TextHeaderGrey>
          <div>
          <img src='https://point.md/static/svg/new-icons/eye.svg' />
            <TextHeaderGrey>{article.counters.view}</TextHeaderGrey>
          </div>
        </ContainerDataView>

        <TitleTextArticlePage
          dangerouslySetInnerHTML={{ __html: article.title.short }}
        />
        <SubTitleTextArticlePage
          dangerouslySetInnerHTML={{ __html: article.description.intro }}
        />
        <ArticlePageImageContainer>
          <ArticlePageImage
            src={`${imageLinksPrefix.articleBig}${article.thumbnail}`}
          />
        </ArticlePageImageContainer>
        <FigcaptionImage>{article.description.thumbnail}</FigcaptionImage>
        <ContainerSubTitleText
          dangerouslySetInnerHTML={{ __html: article.description.long }}
        />
      </ArticleContainer>
  );
};

export default ArticlePage;
