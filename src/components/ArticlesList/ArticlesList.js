import React from "react";
import { useQuery, gql } from "@apollo/client";
import { ArticleContainer } from "../index";
import ArticleItems from "../ArticleItems/ArticleItems";

const GET_ARTICLES = gql`
  query GetArticles {
    contents(
      project_id: "5107de83-f208-4ca4-87ed-9b69d58d16e1"
      lang: "ru"
      skip: 0
      take: 10
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
      cparent {
        attachment
      }
      parents {
        attachment
      }
    }
  }
`;

const ArticlesList = () => {
  const { loading, error, data } = useQuery(GET_ARTICLES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <ArticleContainer>
        <h2>Сегодня</h2>
        <ArticleItems articles={data.contents} />
      </ArticleContainer>
    </>
  );
};

export default ArticlesList;
