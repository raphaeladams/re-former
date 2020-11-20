import React from 'react';
import {createMount} from '@shopify/react-testing';
import {GraphQL} from '@shopify/graphql-testing';

import {AppContext} from './AppContext';
import {createGraphQL} from './graphql';

interface Options {
  graphQL?: GraphQL;
  skipInitialGraphQL?: boolean;
  locale?: string;
}

interface Context {
  graphQL: GraphQL;
}

export const mountWithAppContext = createMount<Options, Context, false>({
  context({graphQL = createGraphQL()}) {
    return {graphQL};
  },
  render(element, {graphQL}) {
    return <AppContext graphQL={graphQL}>{element}</AppContext>;
  },
  async afterMount(root, options) {
    const {graphQL} = root.context;
    graphQL.wrap((perform) => root.act(perform));

    if (options.skipInitialGraphQL) {
      return;
    }

    await graphQL.resolveAll();
  },
});
