import fetch from 'node-fetch';

const resolvers = {
    Query: {
        /**
         * * 아이템 타입에 대한 리졸버를 구현한 부분
         * * 해당 함수 안에서 rest로 데이터를 요창한뒤 받은 값을 그대로 리턴한다.
         * * 리턴된 데이터가 결국 graphql 요청에 대한 값으로 전달된다.
         * @link https://www.apollographql.com/docs/apollo-server/data/resolvers/#resolver-arguments
         * @returns 
         */
        items: async (parent, args, context, info) => {
            const response = await fetch('http://localhost:8000/api/items', { method: 'POST' });
            const data = await response.json();
            return data;
        },
    },
}

export default resolvers;