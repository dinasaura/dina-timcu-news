import React from "react";
import { useQuery, gql } from "@apollo/client";
import { ArticleContainer } from "../Container/Container";
import ArticleItem from "../ArticleIItem/ArticleItem";
import { ContainerForPost } from "./style";
import {
  Content,
  GetArticlesQuery,
  GetArticlesQueryVariables,
} from "../../__generated__/graphql";
import DetectVisibility from "../DetectVisibility/DetectVisibility";
import { projectId } from "../../constants";

const GET_ARTICLES = gql`
  query GetArticles($take: Int, $skip: Int) {
    contents(
      project_id: "${projectId}"
      lang: "ru"
      skip: $skip
      take: $take
    ) {
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
    }
  }
`;

const ArticlesList = () => {
  const { loading, error, data, fetchMore } = useQuery<
    GetArticlesQuery,
    GetArticlesQueryVariables
  >(GET_ARTICLES, {
    variables: {
      take: 10,
      skip: 0,
    },
  });

  if (loading) return <ArticleContainer>Loading...</ArticleContainer>;
  if (error) return <ArticleContainer>Error: {error.message}</ArticleContainer>;

  const articles = data?.contents || [];

  function onVisibleLastItem() {
    fetchMore({
      variables: {
        skip: articles.length,
        take: 10,
      },
    });
  }

  return (
    <ArticleContainer>
      <h2>Сегодня</h2>
      <ContainerForPost>
        {articles.map((article, index) => (
          <React.Fragment key={article.id}>
            <ArticleItem article={article as Content} key={article.id} />
            {index === articles.length - 1 && (
              <DetectVisibility onVisible={onVisibleLastItem} />
            )}
          </React.Fragment>
        ))}
      </ContainerForPost>
    </ArticleContainer>
  );
};

export default ArticlesList;
