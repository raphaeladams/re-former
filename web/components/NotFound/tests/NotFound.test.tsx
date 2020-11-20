import React from 'react';
import {mountWithAppContext} from 'tests';
import {EmptyState} from '@shopify/polaris';

import {NotFound} from '../NotFound';

describe('<NotFound />', () => {
  it('renders one <EmptyState/> with an action to go to home', async () => {
    const wrapper = await mountWithAppContext(<NotFound />);
    expect(wrapper).toContainReactComponent(EmptyState, {
      action: {
        content: 'Go to home',
        url: '/',
      },
    });
  });
});
