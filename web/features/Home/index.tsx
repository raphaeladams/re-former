import {createAsyncComponent} from '@shopify/react-async';

export const Home = createAsyncComponent({
  load: () => import(/* webpackChunkName: 'Home' */ './Home'),
});
