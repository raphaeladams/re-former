import React from 'react';
import {Responsive, AppleHomeScreen} from '@shopify/react-html';

export function Metadata() {
  return (
    <>
      <Responsive coverNotch allowPinchToZoom />
      <AppleHomeScreen />
    </>
  );
}
