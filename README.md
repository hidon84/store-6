<img src="https://user-images.githubusercontent.com/13645032/128773900-6b2a5de9-b2a9-4a63-af14-3b361483e138.png" />

<p align="center">배는 항구에 정박해 있을 때 가장 안전하다. 그러나 그것이 6팀의 존재 이유는 아니다.</p>

<p align="center"><b>6팀 배 출발!</b></p>


# 🐾 6팀의 즐거운 항해 발자취

- [배포 링크 store.woowa.link](https://store.woowa.link/)

- [항해기록](https://snow-bagpipe-339.notion.site/59f1c69982314c10b13163c7f29638af)

- [작업 일정 캘린더](https://snow-bagpipe-339.notion.site/fe8281f1606c4418bc7079a7d8c87d9c?v=00a2b3a456334514b7fd58955a6e1da7)

- [Backlog 링크](https://docs.google.com/spreadsheets/d/1JHx64IJu5w4gNWNk-02ZHw7kVe4nT4PXDLvnqgEBEN8/edit#gid=0)

- [BurnUp Chart 링크](https://docs.google.com/spreadsheets/d/1JHx64IJu5w4gNWNk-02ZHw7kVe4nT4PXDLvnqgEBEN8/edit#gid=1222181688)

- [Figma 링크](https://www.figma.com/file/4zOaAFuQAkAb6uKSPSXOjz/%EB%B0%B0%EB%8A%94-%ED%95%AD%EA%B5%AC%EC%97%90-%EC%A0%95%EB%B0%95%ED%95%B4-%EC%9E%88%EC%9D%84-%EB%95%8C-%EA%B0%80%EC%9E%A5-%EC%95%88%EC%A0%84%ED%95%98%EB%8B%A4.-%EA%B7%B8%EB%9F%AC%EB%82%98-%EA%B7%B8%EA%B2%83%EC%9D%B4-6%ED%8C%80%EC%9D%98-%EC%A1%B4%EC%9E%AC-%EC%9D%B4%EC%9C%A0%EB%8A%94-%EC%95%84%EB%8B%88%EB%8B%A4.?node-id=0%3A1)

- [wiki 링크](https://github.com/woowa-techcamp-2021/store-6/wiki)

# 실행방법

## 서버 환경변수 설정 (.env)

.env.dev 는 올라가있는데 이를 참고하면됩니다.

```
PORT=5000
API_VERSION=0.0.1

REDIS_HOST=
REDIS_PORT=

DB_HOST=
DB_NAME=
DB_USER=
DB_PASSWORD=

JWT_ALGORITHM='HS256'
JWT_SECRET='jwt_secret'
JWT_EXPIRE_ACCESS=0.5
JWT_EXPIRE_REFRESH=336

/* S3 관련 설정 */
AWS_KEY= /* accessKeyId */
AWS_PW= /* secretAccessKey */
AWS_REGION=
AWS_BUCKET=
AWS_MAX_SIZE= /* 비워놔도됨 */

OAUTH_GOOGLE_CLIENT_ID=
OAUTH_GOOGLE_CLIENT_SECRET=
OAUTH_GOOGLE_CALLBACK_URL=

OAUTH_FACEBOOK_CLIENT_ID=
OAUTH_FACEBOOK_CLIENT_SECRET=
OAUTH_FACEBOOK_CALLBACK_URL=
```

## 서버 실행

.env 설정으로 실행

```sh
yarn start
```

.env.dev 설정으로 실행

```sh
yarn dev
```

## 클라이언트 실행

/client/.env.dev 설정을 이용해서 실행

```sh
yarn start:dev
```

/client/.env.prod 설정을 이용해서 실행

```sh
yarn build
```
