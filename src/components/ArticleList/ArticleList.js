import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { ArticleInfo, ArticleItem, ArticleListImage, ContainerForArticle, LastModified, StyledLink, SubtitleText } from './style';
import { ArticleContainer } from '../Container';

const GET_ARTICLES = gql`
  query GetArticles {
    contents(project_id: "5107de83-f208-4ca4-87ed-9b69d58d16e1", lang: "ru", skip: 0, take: 10) {
      id
      title {
        short
      }
      thumbnail
      description {
        intro
      }
      dates {
        updated: updated(format: "mm", lang: "ru", getDiff: true)
       }
       cparent{
        attachment
       }
       parents{
        attachment
       }
    }
  }
`;

const ArticleList = () => {
  const { loading, error, data } = useQuery(GET_ARTICLES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <ArticleContainer>
        <h2>Сегодня</h2>
        <ContainerForArticle>
      
          {data.contents.map(article => (
            <ArticleItem key={article.id}>
              <StyledLink to={`/article/${article.id}`}>
                <ArticleListImage src={`https://i.simpalsmedia.com/point.md/news/370x194/${article.thumbnail}`} alt="Article Image" />
              </StyledLink>
              <ArticleInfo>
                <StyledLink to={`/article/${article.id}`} >
                  <h3>{article.title.short}</h3>
                </StyledLink>
                <SubtitleText>{article.description.intro}</SubtitleText>
                <LastModified>{article.dates.updated}</LastModified>
              </ArticleInfo>
            </ArticleItem>
          ))}
     
        </ContainerForArticle>
      </ArticleContainer>
    </>
  );
};

export default ArticleList;
