import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { createRoot } from 'react-dom/client'; 
import App from './App';

const client = new ApolloClient({
  uri: 'https://point.md/graphql',
  cache: new InMemoryCache({
    typePolicies: {
        Query: {
            fields: {
                contents: {
                    // Don't cache separate results based on
                    // any of this field's arguments.
                    keyArgs: false,

                    // Concatenate the incoming list items with
                    // the existing list items.
                    merge(existing = [], incoming) {
                        return [...existing, ...incoming];
                    },
                }
            }
        }
    }
})
});

const root = createRoot(document.getElementById('root')as HTMLElement);

root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
