import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
import { ArticleContainer } from '../Container';
import { ArticlePageImage, ArticlePageImageContainer, ContainerDataView, ContainerSubTitleText, FigcaptionImage, SubTitleTextArticlePage, TitleTextArticlePage } from './style';

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
      counters{
        view
      }
  }
}
`;

const ArticlePage = () => {
  const { id } = useParams();

  const articleId = id.toString(); 
  
  const { loading, error, data } = useQuery(GET_ARTICLE, {
    variables: { articleId }
  });

  if (loading) return <div>Caricamento in corso...</div>;
  if (error) return <div>Errore: {error.message}</div>;

  const article = data.content;

  if (!article) return <div>Articolo non trovato</div>;

  return (
    <>
      <ArticleContainer>
        <ContainerDataView>
         <p>{article.counters.view}</p> 
         <p>{article.dates.updated}</p> 
        </ContainerDataView>

      <TitleTextArticlePage dangerouslySetInnerHTML={{__html : article.title.short}}/>
      <SubTitleTextArticlePage dangerouslySetInnerHTML={{__html : article.description.intro}}/>
      <ArticlePageImageContainer>
        <ArticlePageImage src={`https://i.simpalsmedia.com/point.md/news/370x194/${article.thumbnail}`} />
      </ArticlePageImageContainer>
      <FigcaptionImage>
        {article.description.thumbnail}
      </FigcaptionImage>
      <ContainerSubTitleText dangerouslySetInnerHTML={{__html : article.description.long}}/>
      </ArticleContainer>
    </>
  );
};

export default ArticlePage;
