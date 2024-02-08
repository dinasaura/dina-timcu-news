/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query GetArticle($articleId: String!) {\n    content(id: $articleId) {\n      id\n      title {\n        short\n        long\n      }\n      thumbnail\n      description {\n        intro\n        thumbnail\n        long\n      }\n      dates {\n        updated: updated(format: \"mm\", lang: \"ru\", getDiff: true)\n      }\n      counters {\n        view\n      }\n    }\n  }\n": types.GetArticleDocument,
    "\n  query GetArticles($take: Int, $skip: Int) {\n    contents(\n      project_id: \"5107de83-f208-4ca4-87ed-9b69d58d16e1\"\n      lang: \"ru\"\n      skip: $skip\n      take: $take\n    ) {\n      id\n      title {\n        short\n      }\n      thumbnail\n      description {\n        intro\n      }\n      dates {\n        updated: updated(format: \"mm\", lang: \"ru\", getDiff: true)\n      }\n      cparent {\n        attachment\n      }\n      parents {\n        attachment\n      }\n    }\n  }\n": types.GetArticlesDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetArticle($articleId: String!) {\n    content(id: $articleId) {\n      id\n      title {\n        short\n        long\n      }\n      thumbnail\n      description {\n        intro\n        thumbnail\n        long\n      }\n      dates {\n        updated: updated(format: \"mm\", lang: \"ru\", getDiff: true)\n      }\n      counters {\n        view\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetArticle($articleId: String!) {\n    content(id: $articleId) {\n      id\n      title {\n        short\n        long\n      }\n      thumbnail\n      description {\n        intro\n        thumbnail\n        long\n      }\n      dates {\n        updated: updated(format: \"mm\", lang: \"ru\", getDiff: true)\n      }\n      counters {\n        view\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetArticles($take: Int, $skip: Int) {\n    contents(\n      project_id: \"5107de83-f208-4ca4-87ed-9b69d58d16e1\"\n      lang: \"ru\"\n      skip: $skip\n      take: $take\n    ) {\n      id\n      title {\n        short\n      }\n      thumbnail\n      description {\n        intro\n      }\n      dates {\n        updated: updated(format: \"mm\", lang: \"ru\", getDiff: true)\n      }\n      cparent {\n        attachment\n      }\n      parents {\n        attachment\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetArticles($take: Int, $skip: Int) {\n    contents(\n      project_id: \"5107de83-f208-4ca4-87ed-9b69d58d16e1\"\n      lang: \"ru\"\n      skip: $skip\n      take: $take\n    ) {\n      id\n      title {\n        short\n      }\n      thumbnail\n      description {\n        intro\n      }\n      dates {\n        updated: updated(format: \"mm\", lang: \"ru\", getDiff: true)\n      }\n      cparent {\n        attachment\n      }\n      parents {\n        attachment\n      }\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;