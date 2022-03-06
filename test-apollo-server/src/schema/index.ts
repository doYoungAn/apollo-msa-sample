import path from 'path';
import { GraphQLSchema } from 'graphql';
import { loadSchemaSync } from '@graphql-tools/load';
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';

/**
 * * graphql 파일들을 모두 가져와 아폴로 서버가 사용할 수 있도록 스키마를 생성한다.
 * @link https://www.graphql-tools.com/docs/schema-loading
 */
const schema: GraphQLSchema = loadSchemaSync(path.join(__dirname, './index.graphql'), {
    loaders: [new GraphQLFileLoader()]
});

export default schema;