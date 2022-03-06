import { ApolloServer } from 'apollo-server';
import { addResolversToSchema } from '@graphql-tools/schema';
import schema from './schema';
import resolvers from './resolvers';

/**
 * * 아폴로 서버를 만들기 위한 기본적인 데이터를 가져와 아폴로 서버에 세팅하기 위한 값으로 변환한다.
 * @link https://www.graphql-tools.com/docs/schema-loading
 */
const schemaWithResolvers = addResolversToSchema({
  schema,
  resolvers,
})

/**
 * * 아폴로 서버를 생성한다.
 */
const server = new ApolloServer({ schema: schemaWithResolvers });

/**
 * * 아폴로 서버를 실행한다.
 */
server.listen({ port: 4001 }).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});