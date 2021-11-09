# 🔥 Assignment_REDBRICK (with NestJS)

🧱 wanted x wecode 프리온보딩 백엔드 코스 - [Assignment 3] 레드브릭

[주요 서비스 사이트](https://wizlab.net/)

[서버 개발자 채용 공고](https://www.notion.so/22564a15d2da40ab9d5812c68dd7ff3d) 



## ☄️ 팀원 소개

| 이름                                     | 담당 기능 |
| ---------------------------------------- | --------- |
| [김바다](https://github.com/sally0226)   |           |
| [김효민](https://github.com/luckyhyom)   |           |
| [원동균](https://github.com/WonDongGyun) |           |
| [이나영](https://github.com/bokiri409)   |           |
| [장희진](https://github.com/heejin99)    |           |
| [조재복](https://github.com/ildang100)   |           |

<br>

## 🌎 배포

주소 : http://3.144.245.28:3000

<br>

## 🛠 프로젝트 빌드 및 서버 실행 방법

1. 상단의 Code 버튼을 눌러 경로를 복사한 후 클론 받습니다.

```
$ git clone https://github.com/preOnboarding-Team13/Assignment_1_AIMMO_nest.git
```

2. 패키지를 설치합니다.

```
$ npm install
```

3. 서버를 실행해 줍니다.

```
$ npm start
```

4. 정해진 API에 접근하여 서비스를 이용합니다.



## 📝 과제 요구사항

### [필수 포함 사항]

-   READ.ME 작성
    - 프로젝트 빌드, 자세한 실행 방법 명시
    - 구현 방법과 이유에 대한 간략한 설명
    - 완료된 시스템이 배포된 서버의 주소
    - Swagger나 Postman을 통한 API 테스트할때 필요한 상세 방법
    - 해당 과제를 진행하면서 회고 내용 블로그 포스팅
-   Swagger나 Postman을 이용하여 API 테스트 가능하도록 구현
-   선호 기술 : Javascript (+TypeScript)

### [과제 안내]

위즈랩은 학생들이 코딩에 재미를 느낄 수 있도록 간단한 게임을 코딩을 통해 만들 수 있는 플랫폼입니다

게임을 만들기 위해선 다음과 같은 과정이 필요합니다

1. 회원가입
2. 게임 제작하기 - 제작 중 단계의 게임을 '프로젝트'라고 합니다
3. 게임 출시(퍼블리싱)하기

각 단계의 요구사항은 다음과 같습니다

- 회원가입
- 게임 제작
  - 프로젝트는 **'실시간'**으로 반영이 되어야 합니다
    - 예를 들어, 프로젝트 수정 중 의도치 않은 사이트 종료 시에도 **작업 내역은 보존**되어야 합니다
- 게임 출시하기
  - **프로젝트 당 퍼블리싱 할 수 있는 개수는 하나**입니다. 퍼블리싱한 게임은 수정할 수 있어야 하며, 수정 후 재출시시 기존에 퍼블리싱된 게임도 수정됩니다
  - 출시하는 게임은 다른 사용자들도 볼 수 있으며, 사용자들의 **조회수 / 좋아요 등을 기록**할 수 있어야 합니다
  - '게임 혹은 사용자 **검색**'을 통해서 찾을 수 있어야 합니다

**아래의 문제를 풀어야 합니다**

```jsx
- 참고 - 문제 1,2번은 필수 문제이며, 3번은 선택입니다
문제 1. '회원가입'부터 '게임 출시'까지 필요한 테이블을 설계하세요

문제 2. 다음에 필요한 API를 설계하세요

	1. 게임 제작하기에 필요한 API
	3. 조회수 수정, 좋아요 API
	4. 게임 혹은 사용자로 검색 API

- option -
문제 3. 
 (1) 프로젝트 실시간 반영을 위한 Architecture를 설계하세요 ( 그림이 있다면 좋습니다 )
 (2) 위의 Architecture를 토대로 기능을 구현하세요
```



## 🏫 사용 기술

-   Backend : <img src="https://img.shields.io/badge/NestJS-E0234E?style=flat&logo=NestJS&logoColor=white"/></a> <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=TypeScript&logoColor=white"/></a> 
-   DataBase : <img src="https://img.shields.io/badge/MongoDB-008CC1?style=flat&logo=MongoDB&logoColor=white"/></a>
-   Collaboration : <img src="https://img.shields.io/badge/Git-F05032?style=flat&logo=Git&logoColor=white"/></a> <img src="https://img.shields.io/badge/GitHub-181717?style=flat&logo=GitHub&logoColor=white"/></a> <img src="https://img.shields.io/badge/Postman-FF6C37?style=flat&logo=Postman&logoColor=white"/></a>
-   Deploy: <img src="https://img.shields.io/badge/Amazon AWS-232F3E?style=flat&logo=Amazon AWS&logoColor=white"/>



## 📂 폴더 구조

6개의 domain을 생성했습니다.

- socket
- project
- game
- auth
- user
- game

database 폴더: mongoDB 연결 폴더

entities 폴더: mongoose Schema 폴더

test 폴더: e2e test 폴더

```
.
├── src
│  ├── database
│  │  │  ├── database.module.ts
│  │  │  └── database.provider.ts
│  ├── domain
│  │  ├── auth
│  │  │  ├── guards
│  │  │  │  ├── createProject.dto.ts
│  │  │  │  └── createProject.dto.ts
│  │  │  ├── auth.controller.spec.ts
│  │  │  ├── auth.controller.ts
│  │  │  ├── auth.module.ts
│  │  │  ├── auth.service.spec.ts
│  │  │  └── auth.service.ts
│  │  ├── project
│  │  │  ├── dto
│  │  │  │  └── createProject.dto.ts
│  │  │  ├── exception
│  │  │  │  └── NotFoundGameException.dto.ts
│  │  │  ├── project.controller.spec.ts
│  │  │  ├── project.controller.ts
│  │  │  ├── project.module.ts
│  │  │  ├── project.controller.ts
│  │  │  ├── project.service.spec.ts
│  │  │  └── project.service.ts
│  │  ├── game
│  │  │  └── ...
│  │  ├── project
│  │  │  └── ...
│  │  ├── user
│  │  │  ├── exception
│  │  │  │  ├── DuplicatedUserException.dto.ts
│  │  │  │  ├── NotFoundUserException.dto.ts
│  │  │  │  └── UnauthorizedUserException.dto.ts
│  │  │  └── ...
│  │  ├── like
│  │  │  ├── like.controller.spec.ts
│  │  │  ├── like.controller.ts
│  │  │  ├── like.module.ts
│  │  │  ├── like.service.spec.ts
│  │  │  └── like.service.ts
│  │  ├── socket
│  │  │  ├── socket.gateway.spec.ts
│  │  │  ├── socket.gateway.ts
│  │  │  └── socket.module.ts
│  ├── entities
│  │  ├── block.schema.ts
│  │  ├── game.schema.ts
│  │  ├── project.schema.ts
│  │  ├── scene.schema.ts
│  │  ├── sprite.schema.ts
│  │  └── user.schema.ts
│  ├── global
│  │  ├── common
│  │  │  ├── CommonResponse.ts
│  │  │  ├── ErrorCode.ts
│  │  │  ├── ErrorResponse.ts
│  │  │  ├── SuccessCode.ts
│  │  │  └── SuccessResponse.ts
│  │  ├── exception
│  │  │  └── ExceptionHandler.ts
│  ├── app.module.ts
│  ├── main.ts
├── test
│  ├── app.e2e-spec.ts
│  └── jest-e2e.json
├── .env
├── nest-cli.json
├── package.json
├── package-lock.json
├── tsconfig.json
├── tsconfig.build.json
└── README.md
```





## 🧬 DB 모델링

![Untitled Diagram drawio (2)](https://user-images.githubusercontent.com/43634786/140792086-063c5ac0-49cc-4adf-a963-1d8015bee08e.png)



## 🔗 구현 기능

### 1) Check List



### 2) 상세 내용

#### Database로 MongoDB 선택



#### mongoose 라이브러리 사용



#### 실시간 처리를 위한 socket 통신 이용

// 아키텍쳐 그리기?



## 🐾 API 

[Postman 주소-링크]()



## 🐾 API Test 방법





## 🍭 TIL 블로그 주소

- 김바다 : 
- 김효민 : 
- 원동균 : 
- 이나영 :
- 장희진 : 
- 조재복 : 
