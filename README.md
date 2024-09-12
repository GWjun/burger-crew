<div align="center">
  <h2>Burger Wiki</h2>
  <p align="center">
    <img src="https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=nextdotjs&logoColor=white" alt="Next.js badge">
    <img src="https://img.shields.io/badge/-tRPC-2596BE?style=flat&logo=trpc&logoColor=white" alt="tRPC badge">
    <img src="https://img.shields.io/badge/Prisma-2D3748?style=flat-square&logo=prisma&logoColor=white" alt="Prisma badge">
    <img src="https://img.shields.io/badge/Recoil-3563F2?style=flat-square&logo=recoil&logoColor=white" alt="Recoil badge">
    <img src="https://img.shields.io/badge/Vanilla%20Extract-1EC5C4?style=flat-square&logo=vanilla&logoColor=white" alt="Vanilla Extract badge">
    <img src="https://img.shields.io/badge/FSD%20Architecture-007ACC?style=flat-square&logo=architecture&logoColor=white" alt="FSD Architecture badge">
  </p>
  <h3><b><i>"지식은 햄버거를 대신할 수 없어"</i></b></h3>
</div>

## 사용 방법

### 환경 변수 설정

루트 디렉터리에 `.env` 파일 생성 후 `prisma`, `auth.js`, `sentry` 에 해당하는 환경 변수 입력

```sh
# prisma
DATABASE_URL="postgresql://johndoe:randompassword@localhost:6543/mydb?schema=public?pgbouncer=true"
DIRECT_URL="postgresql://johndoe:randompassword@localhost:5432/mydb?schema=public"

# auth.js
AUTH_SECRET="your_auth_secret"
AUTH_GOOGLE_ID="your_oauth_id"
AUTH_GOOGLE_SECRET="your_oauth_secret"

# sentry
SENTRY_AUTH_TOKEN=your_sentry_token
SENTRY_DSN=your_sentry_dsn
```

### 설치

```sh
pnpm install
```

### prisma client 생성

```sh
pnpx prisma generate
```

### 실행

```sh
pnpm dev
```

