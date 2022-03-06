import { Customer } from './../../types/resolvers-types';

const resolvers = {
    Mutation: {
        /**
         * 거래처 타입에 대한 뮤테이션 리졸버를 구현한 부분
         * 리턴된 데이터가 결국 graphql 요청에 대한 값으로 전달된다.
         * ``` md
         * 아규먼트 정리
         * 1. parent        - 부모체인의 리졸버에서 리턴한 값
         * 2. args          - gql 요청 받을때 받은 variables
         * 3. context       - 아폴로 서버 생성할때 옵션으로 준 context의 리턴값
         * 4. info          - 요청받은 gql의 정보
         * ```
         * @link https://www.apollographql.com/docs/apollo-server/data/resolvers/#resolver-arguments
         * @returns 
         */
         updateCustomer: async (parent: any, args: { bizCd: string }, context: { authScope: string }, info: any) => {
            const results: Customer[] = [
                {
                    customerCode: 123,
                    customerName: '123',
                    ownerContact: ['000', '0000', '0000']
                }
            ];
            return results;
        },
    },
}

export default resolvers;