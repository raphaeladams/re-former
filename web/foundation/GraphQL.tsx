import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import fetch from 'cross-fetch';
import {createHttpLink} from 'apollo-link-http';
import {GraphQLUniversalProvider} from '@shopify/react-graphql-universal-provider';
import {useRequestHeader} from '@shopify/react-network';

export function GraphQL({
  url,
  children,
}: {
  url: URL;
  children?: React.ReactNode;
}) {
  const cookie = useRequestHeader('cookie');

  const createClientOptions = () => {
    const link = createHttpLink({
      uri: `${url.origin}/graphql`,
      fetch,
      headers: {
        cookie,
      },
    });

    return {link};
  };

  return (
    <GraphQLUniversalProvider createClientOptions={createClientOptions}>
      {children}
    </GraphQLUniversalProvider>
  );
}
