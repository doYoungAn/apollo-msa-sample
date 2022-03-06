import path from 'path';
import { GraphQLSchema } from 'graphql';
import { loadSchemaSync } from '@graphql-tools/load';
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';

const schema: GraphQLSchema = loadSchemaSync(path.join(__dirname, './index.graphql'), {
    loaders: [new GraphQLFileLoader()]
});

export default schema;