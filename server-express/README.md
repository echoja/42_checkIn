# 42 CHECKIN SERVER

본 프로젝트는 기존 42 CheckIn 서버에서 NestJS 기능을 덜어내어 진입장벽을 낮추고자 하는 포팅 프로젝트입니다.

## 개발 환경 세팅


```bash
npm install
```

- 추천 에디터: Visual Studio Code
- `.env.local.example` 파일을 참조하여 `.env.local` 파일을 생성하세요.
- `type.d.ts` 에서 `ProcessEnv` 인터페이스를 정의하는 부분에서도 환경 변수를 확인할 수 있습니다.
- 추천할 만한 Visual Studio Code 익스텐션(extension)은 다음과 같습니다: eslint, prettier
- 경로 Alias 는 다음과 같습니다. 이는 `tsconfig.json`, `jest.config.js` 에서 확인할 수 있습니다.
  - `@/*` --> `<rootDir>/src/*`
  - `@test/*` --> `<rootDir>/test/*`
- 데이터베이스 설정 시 데이터베이스 서버가 해당 주소(`DATABASE_HOST`, `DATABASE_PORT`)로 켜져있어야 하고, 해당 데이터베이스(`DATABASE_NAME`)가 만들어져 있어야 하고, 사용자(`DATABASE_USER`)의 권한이 미리 설정되어야 합니다.

## 개발 서버 열기

```bash
npm run dev
```

- 개발 서버로 열었을 때 `/api` 경로가 아닌 요청들은 모두 `localhost:4000` (react dev-server 열었을 때의 포트) 으로 요청이 프록시로 전달됩니다. 그래서 react dev-server 와 함께 기능 테스트를 수행할 수 있습니다. (react dev-server hot reload 기능이 되지 않는 버그가 있음)

## 테스트

```bash
npm test # 전체 테스트
npm test ./src/auth.spec.ts # 특정 파일 테스트
```

타입스크립트로 바로 실행시키기 위해 ts-jest 패키지를 사용하고 있습니다.

## 배포

- 내용 추가 예정

## TODO

- `/api/user/status`
- `/api/user/forceCheckOut/:userId`
- `/api/card/release/:id`
- 로그 기능
- 디스코드 연동
- 데이터베이스 테이블 정의가 일치되는지 확인
- 프로덕션일 때, react 빌드된 경로로 express.static 경로 생성 및 SPA일 경우 connect-history-api-fall 설정
