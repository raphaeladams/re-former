import React from 'react';
import {EmptyState} from '@shopify/polaris';
import {useStatus, StatusCode} from '@shopify/react-network';
import {useI18n} from '@shopify/react-i18n';

import {notFoundIllustration} from './illustrations';

export function NotFound() {
  useStatus(StatusCode.NotFound);
  const [i18n] = useI18n();

  return (
    <EmptyState
      heading={i18n.translate('heading')}
      image={notFoundIllustration}
      action={{
        content: i18n.translate('goToHome'),
        url: '/',
      }}
    >
      <p>{i18n.translate('retryInstruction')}</p>
    </EmptyState>
  );
}
