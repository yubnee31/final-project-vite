# Final Project

This project was bootstrapped with [Vite](https://github.com/vitejs/vite).

## 프로젝트

### 팀원

- [makeit80](https://github.com/makeit80)
  - 각자 할일 적기
- [loveytheb](https://github.com/loveytheb)
  - 각자 할일 적기
- [joonyg](https://github.com/joonyg)
  - 각자 할일 적기
- [yubnee31](https://github.com/yubnee31)
  - 각자 할일 적기

### 소개

- 최종 프로젝트의 컨셉은 <b>아이돌 정보 공유 커뮤니티</b>로 설정했으며, <b>아이돌 정보 공유 커뮤니티</b>라는 컨셉에 맞게 선호하는 아이돌의 정보를 얻을 수 있고 같은 팬덤의 사람들끼리 정보를 공유할 수 있는 프로젝트입니다.
- 회원가입은 사용자의 이메일 및 구글, 카카오를 사용하였습니다.

### 사이트

![image](https://github.com/makeit80/final-project-vite/assets/146186897/c1e96a79-e084-4a0c-9a80-721a997c44dc)

[프로젝트로 이동하기](배포 사이트 링크 게시)

## 기술 스택 및 사용 라이브러리

- react
- typescript
- Vite
- dayjs
- styled-components
- styled-reset
- react-toastify
- react-spinners
- recoil

- tanstack/react-query
- tanstack/react-query-devtools

- supabase
- supabase - Authentication
- supabase - Table Editor
- supabase - Storage

## 프로젝트 설치

### clone repository

```
git clone https://github.com/vitejs/vite.git .
```

### install npm dependencies

```
yarn
yarn install
```

### start dev-server

```
yarn dev
```

## 프로젝트 구조

```
📦 src
 ┣ 📂 api
 ┣ 📂 assets
 ┃ ┗ 📂 images
 ┣ 📂 components
 ┃ ┣ 📂 artistInfo
 ┃ ┣ 📂 Auth
 ┃ ┣ 📂 Calender
 ┃ ┣ 📂 Common
 ┃ ┃ ┣ 📂 Nav
 ┃ ┃ ┗ 📂 Spinner
 ┃ ┣ 📂 follow
 ┃ ┣ 📂 like
 ┃ ┣ 📂 Modal
 ┃ ┣ 📂 Mypage
 ┃ ┣ 📂 Post
 ┃ ┃ ┣ 📂 AddPost
 ┃ ┃ ┃ ┣ 📂 AddModal
 ┃ ┃ ┣ 📂 PostList
 ┃ ┃ ┃ ┣ 📂 EditModal
 ┃ ┃ ┃ ┣ 📂 OpenModal
 ┃ ┃ ┃ ┃ ┣ 📂 OpenComment
 ┃ ┃ ┃ ┃ ┗ 📂 OpenContent
 ┃ ┃ ┃ ┗ 📂 PostLike
 ┃ ┗ 📂 Schedule
 ┣ 📂 pages
 ┣ 📂 shared
 ┃ ┗ 📂 recoil
 ┣ 📂 toast
 ┣ 📂 types
 ┣ 📜 App.tsx
 ┣ 📜 GlobalStyle.tsx
 ┣ 📜 main.tsx
 ┗ 📜 vite-env.d.ts
```

## 구현 사항

### 로그인, 회원가입

### CRUD

### 댓글 기능

### 팔로우, 팔로워 기능

### 좋아요 기능

### 무한 스크롤

### 반응형 웹 구현

### 마이 페이지

- 닉네임 수정 기능
- 프로필 수정 기능
- 알림 설정한 스케줄 확인 기능
- 로그아웃

### 배포하기

- aws라는 호스팅플랫폼을 이용하여 배포
- 배포에 적용될 브랜치는 main

### aws에 배포한 뒤 커스텀 도메인 적용
