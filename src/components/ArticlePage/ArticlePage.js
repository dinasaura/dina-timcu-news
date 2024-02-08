import React from "react";
import { useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import { ArticleContainer } from "../index";
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
import eyeSvg from "../../assets/icons/eye.svg";
import { imageLinksPrefix } from "../../constants";

const GET_ARTICLE = gql`
  query GetArticle($articleId: String!) {
    content(id: $articleId) {
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

const ArticlePage = () => {
  const { id } = useParams();

  const articleId = id.toString();

  const { loading, error, data } = useQuery(GET_ARTICLE, {
    variables: { articleId },
  });

  if (loading) return <div>Caricamento in corso...</div>;
  if (error) return <div>Errore: {error.message}</div>;

  const article = data.content;

  if (!article) return <div>Articolo non trovato</div>;

  return (
    <>
      <ArticleContainer>
        <ContainerDataView>
          <TextHeaderGrey>{article.dates.updated}</TextHeaderGrey>
          <div>
            <img src={eyeSvg} alt="Eye Icon" />
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
            src={imageLinksPrefix.articleBig + article.thumbnail}
          />
        </ArticlePageImageContainer>
        <FigcaptionImage>{article.description.thumbnail}</FigcaptionImage>
        <ContainerSubTitleText
          dangerouslySetInnerHTML={{ __html: article.description.long }}
        />
      </ArticleContainer>
    </>
  );
};

export default ArticlePage;
