import { ApolloServer, gql } from 'apollo-server';
import { addResolversToSchema } from '@graphql-tools/schema';
import fetch from 'node-fetch';
import schema from './schema';

/**
 * @link https://www.graphql-tools.com/docs/schema-loading
 */
const schemaWithResolvers = addResolversToSchema({
  schema,
  resolvers: {
    Query: {
      items: async () => {
        const response = await fetch('http://localhost:8000/api/items', { method: 'POST' });
        const data = await response.json();
        return data;
      },
    },
  }
})

const server = new ApolloServer({ schema: schemaWithResolvers });

server.listen({ port: 4001 }).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
})