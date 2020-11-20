import React from 'react';
import {EmptyState} from '@shopify/polaris';
import {usePerformanceMark, Stage} from '@shopify/react-performance';
import {useI18n} from '@shopify/react-i18n';
import {useQuery} from '@shopify/react-graphql';

import {emptyStateIllustration} from './illustrations';
import HomeQuery from './graphql/HomeQuery.graphql';

export default function Home() {
  usePerformanceMark(Stage.Complete, 'Home');
  const [i18n] = useI18n();
  const {data} = useQuery(HomeQuery);

  return (
    <EmptyState
      heading={(data && data.testField) || i18n.translate('heading')}
      image={emptyStateIllustration}
      footerContent={i18n.translate('footerContent', {
        path: 'web/features/Home/Home.tsx',
      })}
    />
  );
}
