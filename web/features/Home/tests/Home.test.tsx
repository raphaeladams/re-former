import React from 'react';
import {mountWithAppContext, createGraphQL, fillGraphQL} from 'tests';
import {EmptyState} from '@shopify/polaris';

import Home from '../Home';
import HomeQuery from '../graphql/HomeQuery.graphql';

describe('<Home />', () => {
  it('renders one <EmptyState/> with a footer note', async () => {
    const wrapper = await mountWithAppContext(<Home />);
    expect(wrapper).toContainReactComponent(EmptyState, {
      footerContent: 'Modify this page by editing web/features/Home/Home.tsx',
    });
  });

  it('renders one <EmptyState/> with default heading text when Query is loading', async () => {
    const wrapper = await mountWithAppContext(<Home />, {
      skipInitialGraphQL: true,
    });
    expect(wrapper).toContainReactComponent(EmptyState, {
      heading: 'This is the Home Page of your application',
    });
  });

  it('renders one <EmptyState/> with heading text returned from Query', async () => {
    const mockTestField = 'Test Content';
    const wrapper = await mountWithAppContext(<Home />, {
      graphQL: createGraphQL({
        HomeQuery: fillGraphQL(HomeQuery, {
          testField: mockTestField,
        }),
      }),
    });

    expect(wrapper).toContainReactComponent(EmptyState, {
      heading: mockTestField,
    });
  });
});
