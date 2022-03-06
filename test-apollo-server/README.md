## Test Apollo Server

### 참고자료
[Apollo Server](https://www.apollographql.com/docs/apollo-server/getting-started/)
[graphql-tools](https://www.graphql-tools.com/docs/introduction)
[graphql-code-generator](https://www.graphql-code-generator.com/docs/getting-started)
[typescript](https://www.typescriptlang.org/docs/)

### 기술스택
1. Apollo Server
2. graphql
3. graphql-tools
    - graphql 파일 혹은 리졸버등을 쉽게 관리 및 개발할 수 있도록 도와준다
4. graphql-code-generator
    - 타입스크립트로 개발하기 위해 필요한 타입들을 쉽게 생성해준다. (graphql 파일 기반)
5. typescript

### 프로젝트 구조
``` bash
├── node_modules
├── src
│   ├── resolvers // 리졸버들이 구현된 폴더
│   ├── schema // graphql의 스키마들이 관리되는 폴더
│   ├── app.ts // 실제 실행하는 엔트리 파일
│   └── env.ts // 환경변수를 가지고 있는 파일
├── types // 글로벌 타입 관리되는 폴더
├── .env // 환경변수를 지정하는 파일
├── .gitignore
├── codegen.yaml // graphql 파일을 기반으로 타입 생성할시 사용하는 설정
├── Dockerfile
├── package-lock.json
├── package.json
├── README.md
└── tsconfig.json // 타입스크립트 설정 파일
```

### 스크립트
| 명령 | 설명 |
|------|------|
| npm run dev | 개발을 위해서 서버를 동작시킨다. |
| npm run generate | graphql파일을 읽어서 타입스크립트에서 사용하는 타입들을 정의한다. |
| npm run build | ts 파일 및 기타 파일을 읽어 js파일로 변환시킨다. |
| npm run start | 빌드된 파일을 실행한다. |

