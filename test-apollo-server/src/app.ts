import 'dotenv/config';
import { ApolloServer } from 'apollo-server';
import { addResolversToSchema } from '@graphql-tools/schema';
import schema from './schema';
import resolvers from './resolvers';

/**
 * 아폴로 서버를 만들기 위한 기본적인 데이터를 가져와 아폴로 서버에 세팅하기 위한 값으로 변환한다.
 * 스키마는 grqphql의 타입에 관련한 정보
 * 리졸버는 해당 타입에 대한 실제 리턴의 함수
 * @link https://www.graphql-tools.com/docs/schema-loading
 */
const schemaWithResolvers = addResolversToSchema({
  schema,
  resolvers,
});

/**
 * * 아폴로 서버를 생성한다.
 */
const server = new ApolloServer({
  schema: schemaWithResolvers,
  /**
   * context에서 리턴하는 변수가 resolver함수 안의 context로 넘어간다.
   * 해당 함수에서 db연결 후 해당 오브젝트를 넘기기도 한다.
   */
  context: () => ({
    authScope: 'autoScope',
  })
});

/**
 * * 아폴로 서버를 실행한다.
 */
server.listen({ port: 4001 }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});