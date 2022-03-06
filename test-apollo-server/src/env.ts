/**
 * * dotenv를 사용해 .env에 대한 정보를 불러오고 해당 변수들을 타입 지정해서
 * * 사용하기 위해 변수 선언
 */
const ENV = {
    REST_ENDPOINT: process.env.REST_ENDPOINT,
};

export default ENV;
