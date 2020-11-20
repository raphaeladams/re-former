import {readFileSync} from 'fs';
import {resolve} from 'path';

// eslint-disable-next-line import/no-extraneous-dependencies
import {buildSchema} from 'graphql';
import {createFiller} from 'graphql-fixtures';
import {createGraphQLFactory} from '@shopify/graphql-testing';

const basePath = resolve(__dirname, '../../build/graphql');

export const schema = buildSchema(
  readFileSync(resolve(basePath, 'schema.graphql'), 'utf8'),
);

export const fillGraphQL = createFiller(schema);

export const createGraphQL = createGraphQLFactory({
  unionOrIntersectionTypes: JSON.parse(
    readFileSync(
      resolve(basePath, 'GraphQL-schema-unions-and-interfaces.json'),
      {
        encoding: 'utf8',
      },
    ),
  ),
});
