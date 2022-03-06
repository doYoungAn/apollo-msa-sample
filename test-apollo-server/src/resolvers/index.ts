import { mergeResolvers } from '@graphql-tools/merge';
import ItemResolvers from './item';

/**
 * * 각기 다른 리졸버를 가져와 병합한다.
 * * 각각의 리졸버는 쿼리와 뮤테이션에 대한 값들을 가지고 있으며 해당 값들을 하나로 머지시킨다.
 */
const resolvers = mergeResolvers([
    ItemResolvers,
])

export default resolvers;