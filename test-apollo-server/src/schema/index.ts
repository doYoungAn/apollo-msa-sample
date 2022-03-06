import path from 'path';
import { GraphQLSchema } from 'graphql';
import { loadSchemaSync } from '@graphql-tools/load';
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';

/**
 * graphql 파일들을 모두 가져와 아폴로 서버가 사용할 수 있도록 스키마를 생성한다.
 * index.graphql 파일이 다른 모든 graphql의 파일을 모두 import 하고 있으므로 해당 파일이 entry파일이여 해당 파일만 가져오면
 * 다른 grqphql은 모두 따라온다.
 * @link https://www.graphql-tools.com/docs/schema-loading
 */
const schema: GraphQLSchema = loadSchemaSync(path.join(__dirname, './index.graphql'), {
    loaders: [new GraphQLFileLoader()]
});

export default schema;