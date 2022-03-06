import { ApolloServer, gql } from 'apollo-server-micro';
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
`

const resolvers = {
  Query: {
    items: async (parent, args, context) => {
      const response = await fetch('http://localhost:8000/api/items', { method: 'POST' });
      const data = await response.json();
      return data;
    },
  },
}

const apolloServer = new ApolloServer({ typeDefs, resolvers });

const startServer = apolloServer.start();

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Credentials', 'true')
  res.setHeader(
    'Access-Control-Allow-Origin',
    'https://studio.apollographql.com'
  )
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  if (req.method === 'OPTIONS') {
    res.end()
    return false
  }

  await startServer
  await apolloServer.createHandler({
    path: '/api/graphql',
  })(req, res)
}

export const config = {
  api: {
    bodyParser: false,
  },
}