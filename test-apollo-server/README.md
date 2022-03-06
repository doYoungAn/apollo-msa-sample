## Test Apollo Server

### 참고자료
[Apollo Server](https://www.apollographql.com/docs/apollo-server/getting-started/)
[graphql-tools](https://www.graphql-tools.com/docs/introduction)
[typescript](https://www.typescriptlang.org/docs/)

### 기술스택
1. Apollo Server
2. graphql
3. graphql-tools
4. typescript

### 프로젝트 구조
``` bash
├── node_modules
├── src
│   ├── resolvers // 리졸버들이 구현된 폴더
│   ├── schema // graphql의 스키마들이 관리되는 폴더
│   ├── app.ts // 실제 실행하는 엔트리 파일
│   └── env.ts // 환경변수를 가지고 있는 파일
├── .env // 환경변수를 지정하는 파일
├── .gitignore
├── package-lock.json
├── package.json
├── README.md
└── tsconfig.json // 타입스크립트 설정 파일
```