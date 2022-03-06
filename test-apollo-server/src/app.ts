import { ApolloServer, gql } from 'apollo-server';
import fetch from 'node-fetch';

const typeDefs = gql`
  type Query {
    items(bizCd: String): [Item!]!
  }
  type Item {
    displayItemCode: String
    itemName: String
    itemQuantity: Int
  }
`;

const resolvers = {
    Query: {
      items: async () => {
        const response = await fetch('http://localhost:8000/api/items', { method: 'POST' });
        const data = await response.json();
        return data;
      },
    },
  };


const server = new ApolloServer({ typeDefs, resolvers });

server.listen({ port: 4001 }).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
})