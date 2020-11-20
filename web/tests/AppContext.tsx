/* This file should reflect closely to the structure in foundation/App.tsx */
import React from 'react';
import {GraphQL} from '@shopify/graphql-testing';
import {ApolloProvider} from '@shopify/react-graphql';
import {I18nUniversalProvider} from '@shopify/react-i18n-universal-provider';
import {AppProvider as PolarisProvider} from '@shopify/polaris';
import enTranslations from '@shopify/polaris/locales/en.json';

interface Props {
  children: React.ReactElement<any>;
  graphQL: GraphQL;
}

const DEFAULT_LOCALE = 'en';

export function AppContext({children, graphQL, ...childrenProps}: Props) {
  const finalChildren =
    Object.keys(childrenProps).length > 0
      ? React.cloneElement(children, childrenProps)
      : children;

  return (
    <ApolloProvider client={graphQL.client}>
      <I18nUniversalProvider locale={DEFAULT_LOCALE}>
        <PolarisProvider i18n={enTranslations}>{finalChildren}</PolarisProvider>
      </I18nUniversalProvider>
    </ApolloProvider>
  );
}
