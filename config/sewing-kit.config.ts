/* eslint-env node */

import {resolve} from 'path';

import {Plugins, Env} from '@shopify/sewing-kit';

const ROOT_PATH = resolve(__dirname, '..');

export default function sewingKitConfig(plugins: Plugins, _env: Env) {
  return {
    name: 're_former',
    plugins: [
      plugins.paths({
        // Determines where the root directory for front-end code is
        app: resolve(ROOT_PATH, 'web'),
        // Determines where test setup should go for front-end code
        tests: resolve(ROOT_PATH, 'web', 'tests'),
      }),
      plugins.graphql({
        schema: resolve(ROOT_PATH, 'app', 'graphql', 'schema.graphql'),
      }),
    ],
  };
}
