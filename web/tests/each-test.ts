import {ensureMocksReset, matchMedia} from '@shopify/jest-dom-mocks';
import {destroyAll as destroyAllWrappers} from '@shopify/react-testing';

import './matchers';

// eslint-disable-next-line jest/require-top-level-describe
beforeEach(() => {
  matchMedia.mock();
});

// eslint-disable-next-line jest/require-top-level-describe
afterEach(() => {
  destroyAllWrappers();
  matchMedia.restore();

  if ((global as any).window) {
    (global as any).window.__stopAllTimers();
  }

  ensureMocksReset();
});
