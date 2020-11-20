import React from 'react';
import {Router} from '@shopify/react-router';
import {usePerformanceReport} from '@shopify/react-performance';
import {NetworkUniversalProvider, Header} from '@shopify/react-network';

import {GraphQL} from './GraphQL';
import {I18n} from './I18n';
import {Metadata} from './Metadata';
import {Polaris} from './Polaris';
import {Routes} from './Routes';

export function App({url}: {url: URL}) {
  usePerformanceReport('/performance_report');

  return (
    <>
      <Metadata />
      <NetworkUniversalProvider headers={[Header.AcceptLanguage]}>
        <GraphQL url={url}>
          <I18n>
            <Polaris>
              <Router location={url}>
                <Routes />
              </Router>
            </Polaris>
          </I18n>
        </GraphQL>
      </NetworkUniversalProvider>
    </>
  );
}
