# ๐ฅ Assignment_REDBRICK (with NestJS)

๐งฑ wanted x wecode ํ๋ฆฌ์จ๋ณด๋ฉ ๋ฐฑ์๋ ์ฝ์ค - [Assignment 3] ๋ ๋๋ธ๋ฆญ

[์ฃผ์ ์๋น์ค ์ฌ์ดํธ](https://wizlab.net/)

[์๋ฒ ๊ฐ๋ฐ์ ์ฑ์ฉ ๊ณต๊ณ ](https://www.notion.so/22564a15d2da40ab9d5812c68dd7ff3d) 



## โ๏ธ ํ์ ์๊ฐ

| ์ด๋ฆ                                     | ๋ด๋น ๊ธฐ๋ฅ |
| ---------------------------------------- | --------- |
| [๊น๋ฐ๋ค](https://github.com/sally0226)   |Project API ๊ธฐ๋ฅ ๊ตฌํ & Unit Test ๊ตฌํ, E2E Test|
| [๊นํจ๋ฏผ](https://github.com/luckyhyom)   |Socket, Unit Test, Refactoring, ๊ฒ์ (์ถ์,๊ฒ์) API ๊ตฌํ|
| [์๋๊ท ](https://github.com/WonDongGyun) |Socket ์ค์  ๋ฐ ๊ตฌํ, like hate ๊ธฐ๋ฅ ๊ตฌํ & unit ํ์คํธ, ๊ณตํต ์๋ฌ ์ฒ๋ฆฌ ๋ฐ ์๋ต ๊ตฌํ|
| [์ด๋์](https://github.com/bokiri409)   |Project API ๊ธฐ๋ฅ ๊ตฌํ & Unit Test ๊ตฌํ|
| [์ฅํฌ์ง](https://github.com/heejin99)    |User, Auth ๊ธฐ๋ฅ ๊ตฌํ & Unit Test ๊ตฌํ, AWS ์๋ฒ ๋ฐฐํฌ|
| [์กฐ์ฌ๋ณต](https://github.com/ildang100)   |์ฝ๋ Refactoring, E2E Test|

<br>

## ๐ ๋ฐฐํฌ

์ฃผ์ : http://3.144.245.28:3000

<br>

## ๐  ํ๋ก์ ํธ ๋น๋ ๋ฐ ์๋ฒ ์คํ ๋ฐฉ๋ฒ

1. ์๋จ์ Code ๋ฒํผ์ ๋๋ฌ ๊ฒฝ๋ก๋ฅผ ๋ณต์ฌํ ํ ํด๋ก  ๋ฐ์ต๋๋ค.

```
$ git clone https://github.com/preOnboarding-Team13/Assignment-3-redbrick.git
```

2. ํจํค์ง๋ฅผ ์ค์นํฉ๋๋ค.

```
$ npm install
```

3. ์๋ฒ๋ฅผ ์คํํด ์ค๋๋ค.

```
$ npm start
```

4. ์ ํด์ง API์ ์ ๊ทผํ์ฌ ์๋น์ค๋ฅผ ์ด์ฉํฉ๋๋ค.



## ๐ ๊ณผ์  ์๊ตฌ์ฌํญ

### [ํ์ ํฌํจ ์ฌํญ]

-   READ.ME ์์ฑ
    - ํ๋ก์ ํธ ๋น๋, ์์ธํ ์คํ ๋ฐฉ๋ฒ ๋ช์
    - ๊ตฌํ ๋ฐฉ๋ฒ๊ณผ ์ด์ ์ ๋ํ ๊ฐ๋ตํ ์ค๋ช
    - ์๋ฃ๋ ์์คํ์ด ๋ฐฐํฌ๋ ์๋ฒ์ ์ฃผ์
    - Swagger๋ Postman์ ํตํ API ํ์คํธํ ๋ ํ์ํ ์์ธ ๋ฐฉ๋ฒ
    - ํด๋น ๊ณผ์ ๋ฅผ ์งํํ๋ฉด์ ํ๊ณ  ๋ด์ฉ ๋ธ๋ก๊ทธ ํฌ์คํ
-   Swagger๋ Postman์ ์ด์ฉํ์ฌ API ํ์คํธ ๊ฐ๋ฅํ๋๋ก ๊ตฌํ
-   ์ ํธ ๊ธฐ์  : Javascript (+TypeScript)

### [๊ณผ์  ์๋ด]

์์ฆ๋ฉ์ ํ์๋ค์ด ์ฝ๋ฉ์ ์ฌ๋ฏธ๋ฅผ ๋๋ ์ ์๋๋ก ๊ฐ๋จํ ๊ฒ์์ ์ฝ๋ฉ์ ํตํด ๋ง๋ค ์ ์๋ ํ๋ซํผ์๋๋ค

๊ฒ์์ ๋ง๋ค๊ธฐ ์ํด์  ๋ค์๊ณผ ๊ฐ์ ๊ณผ์ ์ด ํ์ํฉ๋๋ค

1. ํ์๊ฐ์
2. ๊ฒ์ ์ ์ํ๊ธฐ - ์ ์ ์ค ๋จ๊ณ์ ๊ฒ์์ 'ํ๋ก์ ํธ'๋ผ๊ณ  ํฉ๋๋ค
3. ๊ฒ์ ์ถ์(ํผ๋ธ๋ฆฌ์ฑ)ํ๊ธฐ

๊ฐ ๋จ๊ณ์ ์๊ตฌ์ฌํญ์ ๋ค์๊ณผ ๊ฐ์ต๋๋ค

- ํ์๊ฐ์
- ๊ฒ์ ์ ์
  - ํ๋ก์ ํธ๋ **'์ค์๊ฐ'**์ผ๋ก ๋ฐ์์ด ๋์ด์ผ ํฉ๋๋ค
    - ์๋ฅผ ๋ค์ด, ํ๋ก์ ํธ ์์  ์ค ์๋์น ์์ ์ฌ์ดํธ ์ข๋ฃ ์์๋ **์์ ๋ด์ญ์ ๋ณด์กด**๋์ด์ผ ํฉ๋๋ค
- ๊ฒ์ ์ถ์ํ๊ธฐ
  - **ํ๋ก์ ํธ ๋น ํผ๋ธ๋ฆฌ์ฑ ํ  ์ ์๋ ๊ฐ์๋ ํ๋**์๋๋ค. ํผ๋ธ๋ฆฌ์ฑํ ๊ฒ์์ ์์ ํ  ์ ์์ด์ผ ํ๋ฉฐ, ์์  ํ ์ฌ์ถ์์ ๊ธฐ์กด์ ํผ๋ธ๋ฆฌ์ฑ๋ ๊ฒ์๋ ์์ ๋ฉ๋๋ค
  - ์ถ์ํ๋ ๊ฒ์์ ๋ค๋ฅธ ์ฌ์ฉ์๋ค๋ ๋ณผ ์ ์์ผ๋ฉฐ, ์ฌ์ฉ์๋ค์ **์กฐํ์ / ์ข์์ ๋ฑ์ ๊ธฐ๋ก**ํ  ์ ์์ด์ผ ํฉ๋๋ค
  - '๊ฒ์ ํน์ ์ฌ์ฉ์ **๊ฒ์**'์ ํตํด์ ์ฐพ์ ์ ์์ด์ผ ํฉ๋๋ค

**์๋์ ๋ฌธ์ ๋ฅผ ํ์ด์ผ ํฉ๋๋ค**

```jsx
- ์ฐธ๊ณ  - ๋ฌธ์  1,2๋ฒ์ ํ์ ๋ฌธ์ ์ด๋ฉฐ, 3๋ฒ์ ์ ํ์๋๋ค
๋ฌธ์  1. 'ํ์๊ฐ์'๋ถํฐ '๊ฒ์ ์ถ์'๊น์ง ํ์ํ ํ์ด๋ธ์ ์ค๊ณํ์ธ์

๋ฌธ์  2. ๋ค์์ ํ์ํ API๋ฅผ ์ค๊ณํ์ธ์

	1. ๊ฒ์ ์ ์ํ๊ธฐ์ ํ์ํ API
	3. ์กฐํ์ ์์ , ์ข์์ API
	4. ๊ฒ์ ํน์ ์ฌ์ฉ์๋ก ๊ฒ์ API

- option -
๋ฌธ์  3. 
 (1) ํ๋ก์ ํธ ์ค์๊ฐ ๋ฐ์์ ์ํ Architecture๋ฅผ ์ค๊ณํ์ธ์ ( ๊ทธ๋ฆผ์ด ์๋ค๋ฉด ์ข์ต๋๋ค )
 (2) ์์ Architecture๋ฅผ ํ ๋๋ก ๊ธฐ๋ฅ์ ๊ตฌํํ์ธ์
```



## ๐ซ ์ฌ์ฉ ๊ธฐ์ 

-   Backend : <img src="https://img.shields.io/badge/NestJS-E0234E?style=flat&logo=NestJS&logoColor=white"/></a> <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=TypeScript&logoColor=white"/></a> 
-   DataBase : <img src="https://img.shields.io/badge/MongoDB-008CC1?style=flat&logo=MongoDB&logoColor=white"/></a>
-   Collaboration : <img src="https://img.shields.io/badge/Git-F05032?style=flat&logo=Git&logoColor=white"/></a> <img src="https://img.shields.io/badge/GitHub-181717?style=flat&logo=GitHub&logoColor=white"/></a> <img src="https://img.shields.io/badge/Postman-FF6C37?style=flat&logo=Postman&logoColor=white"/></a>
-   Deploy: <img src="https://img.shields.io/badge/Amazon AWS-232F3E?style=flat&logo=Amazon AWS&logoColor=white"/>



## ๐ ํด๋ ๊ตฌ์กฐ

6๊ฐ์ domain์ ์์ฑํ์ต๋๋ค.

- socket
- project
- game
- auth
- user
- game

database ํด๋: mongoDB ์ฐ๊ฒฐ ํด๋

entities ํด๋: mongoose Schema ํด๋

test ํด๋: e2e test ํด๋

```
.
โโโ src
โ  โโโ database
โ  โ  โ  โโโ database.module.ts
โ  โ  โ  โโโ database.provider.ts
โ  โโโ domain
โ  โ  โโโ auth
โ  โ  โ  โโโ guards
โ  โ  โ  โ  โโโ createProject.dto.ts
โ  โ  โ  โ  โโโ createProject.dto.ts
โ  โ  โ  โโโ auth.controller.spec.ts
โ  โ  โ  โโโ auth.controller.ts
โ  โ  โ  โโโ auth.module.ts
โ  โ  โ  โโโ auth.service.spec.ts
โ  โ  โ  โโโ auth.service.ts
โ  โ  โโโ project
โ  โ  โ  โโโ dto
โ  โ  โ  โ  โโโ createProject.dto.ts
โ  โ  โ  โโโ exception
โ  โ  โ  โ  โโโ NotFoundGameException.dto.ts
โ  โ  โ  โโโ project.controller.spec.ts
โ  โ  โ  โโโ project.controller.ts
โ  โ  โ  โโโ project.module.ts
โ  โ  โ  โโโ project.controller.ts
โ  โ  โ  โโโ project.service.spec.ts
โ  โ  โ  โโโ project.service.ts
โ  โ  โโโ game
โ  โ  โ  โโโ ...
โ  โ  โโโ project
โ  โ  โ  โโโ ...
โ  โ  โโโ user
โ  โ  โ  โโโ exception
โ  โ  โ  โ  โโโ DuplicatedUserException.dto.ts
โ  โ  โ  โ  โโโ NotFoundUserException.dto.ts
โ  โ  โ  โ  โโโ UnauthorizedUserException.dto.ts
โ  โ  โ  โโโ ...
โ  โ  โโโ like
โ  โ  โ  โโโ like.controller.spec.ts
โ  โ  โ  โโโ like.controller.ts
โ  โ  โ  โโโ like.module.ts
โ  โ  โ  โโโ like.service.spec.ts
โ  โ  โ  โโโ like.service.ts
โ  โ  โโโ socket
โ  โ  โ  โโโ socket.gateway.spec.ts
โ  โ  โ  โโโ socket.gateway.ts
โ  โ  โ  โโโ socket.module.ts
โ  โโโ entities
โ  โ  โโโ block.schema.ts
โ  โ  โโโ game.schema.ts
โ  โ  โโโ project.schema.ts
โ  โ  โโโ scene.schema.ts
โ  โ  โโโ sprite.schema.ts
โ  โ  โโโ user.schema.ts
โ  โโโ global
โ  โ  โโโ common
โ  โ  โ  โโโ CommonResponse.ts
โ  โ  โ  โโโ ErrorCode.ts
โ  โ  โ  โโโ ErrorResponse.ts
โ  โ  โ  โโโ SuccessCode.ts
โ  โ  โ  โโโ SuccessResponse.ts
โ  โ  โโโ exception
โ  โ  โ  โโโ ExceptionHandler.ts
โ  โโโ app.module.ts
โ  โโโ main.ts
โโโ test
โ  โโโ app.e2e-spec.ts
โ  โโโ jest-e2e.json
โโโ .env
โโโ nest-cli.json
โโโ package.json
โโโ package-lock.json
โโโ tsconfig.json
โโโ tsconfig.build.json
โโโ README.md
```




## ๐งฌ DB ๋ชจ๋ธ๋ง

![Untitled Diagram drawio (2)](https://user-images.githubusercontent.com/43634786/140792086-063c5ac0-49cc-4adf-a963-1d8015bee08e.png)



## ๐ ๊ตฌํ ๊ธฐ๋ฅ

<br/>

### 1) Check List


- ํ์๊ฐ์

	โ ํ์์ ์์ฑํ๋ API
	
	โ ๋ก๊ทธ์ธ API

- ํ๋ก์ ํธ

	โ ํ๋ก์ ํธ ์์ฑ API
	
	โ ์ ํํ ํ๋ก์ ํธ๋ฅผ ๊ฐ์ ธ์ค๋ API
	
	โ ํ๋ก์ ํธ ํธ์ง API
	
	โ ํ๋ก์ ํธ ์กฐํ API
	
	โ ํ๋ก์ ํธ ์ญ์  API

- ๊ฒ์

	โ ํด๋น ํ๋ก์ ํธ๋ฅผ ํผ๋ธ๋ฆฌ์ฑ ํ๋ API
	
	โ ํผ๋ธ๋ฆฌ์ฑ๋ ๊ฒ์์ ๊ฒ์ํ๋ API

- ์ข์์ / ์ซ์ด์

	โ ์ข์์ API
	
	โ ์ซ์ด์ API
	
	โ ์ ํํ ๊ฒ์ ๋ฐ์ดํฐ๋ฅผ ๊ฐ์ ธ์ค๊ณ , ์กฐํ์๋ฅผ ์ฆ๊ฐ์ํค๋ API


- ๊ธฐ์์ด ์ ์ํ ๋ฌธ์ 

	โ ํ์๊ฐ์ ~ ๊ฒ์ ์ถ์๊น์ง ํ์ํ ํ์ด๋ธ ์ค๊ณ
	
	โ ๊ฒ์ ์ ์ํ๊ธฐ์ ํ์ํ API
	
	โ ์กฐํ์ ์์ , ์ข์์ API
	
	โ ๊ฒ์ ํน์ ์ฌ์ฉ์๋ก ๊ฒ์ API
	
	โ ํ๋ก์ ํธ ์ค์๊ฐ ๋ฐ์์ ์ํ Architecture ์ค๊ณ
	
	โ ์ค๊ณํ Architecture๋ฅผ ํ ๋๋ก ๊ธฐ๋ฅ ๊ตฌํ
	
	โ E2E Test
	
	โ Unit Test 

<br/>
<br/>

### 2) ์์ธ ๋ด์ฉ

#### Database๋ก MongoDB ์ ํ

์ฌ์ฉ์๊ฐ ์ค์๊ฐ์ผ๋ก ์์ฑํ๋ ๊ฒ์ ํ๋ก์ ํธ๊ฐ ๋น ๋ฅด๊ฒ ์ ์ฅ๋๋ ค๋ฉด ๊ด๊ณํ ๋ฐ์ดํฐ๋ฒ ์ด์ค๋ณด๋ค ๋น๊ด๊ณํ ๋ฐ์ดํฐ๋ฒ ์ด์ค๋ฅผ ์ฌ์ฉํด์ ๊ฐ์ข ๋ฐ์ดํฐ๋ฅผ ์ ์ฅํ์๊ณ  ์๊ฐํ์์ต๋๋ค. ๋น๊ด๊ณํ ๋ฐ์ดํฐ๋ฒ ์ด์ค๋ ํ์๋ค์๊ฒ ์ต์ํ MongoDB๋ฅผ ์ฌ์ฉํ์์ต๋๋ค.

<br/>

#### mongoose ๋ผ์ด๋ธ๋ฌ๋ฆฌ ์ฌ์ฉ

TypeOrm๋ MongoDB๋ฅผ ์ง์ํด์ฃผ์ง๋ง, TypeOrm์ MongoDB 3.7๋ฒ์ ๊น์ง ๋ฐ์ ์ง์์ ํด์ฃผ์ง ์์ผ๋ฉฐ TypeOrm์ QueryBuilder๋ ์ง์๋์ง ์์ต๋๋ค. ๋ฐ๋ผ์ Nest Js์์ MongoDB์ ์๋ง๋ mongoose ODM์ ์ฌ์ฉํ์ฌ ํ๋ก์ ํธ๋ฅผ ์งํํ์์ต๋๋ค.

<br/>

#### ์ค์๊ฐ ์ฒ๋ฆฌ๋ฅผ ์ํ socket ํต์  ์ด์ฉ  

ํด๋น ๊ธฐ์์์ ์ค์๊ฐ ์ฒ๋ฆฌ๋ฅผ ์ด๋ป๊ฒ ํ๋์ง ๊ถ๊ธํด์ ๊ตฌ๊ธ ํฌ๋กฌ์ ๊ฐ๋ฐ์ ๊ธฐ๋ฅ์ ์ฌ์ฉํ์ฌ WizLab ์๋น์ค์ Network ํต์ ์ ๋ณด๊ธฐ๋ก ํ์ต๋๋ค. ํด๋น ์๋น์ค์์๋ ์ฌ์ฉ์๊ฐ ์ค์๊ฐ์ผ๋ก ์์ ์ ๊ฒ์์ ํธ์งํ  ๋๋ง๋ค ์์ผ ํต์ ์ ์ฌ์ฉํ์ฌ ๋ฐฑ์๋ ์๋ฒ๋ก ๋ฐ์ดํฐ๋ฅผ ์ ์กํ๊ณ  ์์์ต๋๋ค. ๋ฐ๋ผ์ ํ๋ก์ ํธ๋ฅผ ์ค์๊ฐ์ผ๋ก ๋ฐ์ํ๊ธฐ ์ํด ์์ผ ํต์ ์ ์ฌ์ฉํ์ฌ ๋ฐ์ดํฐ๋ฒ ์ด์ค์ ์ ์ฅํ๊ธฐ๋ก ํ์์ต๋๋ค. 

<br/>

<p align="center"><img src="https://user-images.githubusercontent.com/52685665/140965390-6260cab4-8f34-4b95-8d16-85060505b9c2.png"></p>

<br/>
<br/>

์ ํฌ๋ project๋ผ๋ url์ ์ค์ ํ๊ณ  ํด๋น ์์ผ์ ์ฐ๊ฒฐํ๋๋ก ๊ตฌํํ์๊ณ , update ์์ฒญ์ ํ  ๋๋ง๋ค project ์ ์ฒด ๋ฐ์ดํฐ๋ฅผ ์ ์กํ์ฌ ํ๋ฒ์ ์๋ฐ์ดํธ ํ๋ ๋ฐฉ์์ ์ ํํ์์ต๋๋ค. ์๋ฌด๋๋ ์ฌ์ฉ์๊ฐ ์ค์๊ฐ์ผ๋ก ๋ธ๋ญ, ์ฌ, ํ๋ก์ ํธ๋ฅผ ์์ ํ  ์ ์๊ธฐ ๋๋ฌธ์ ๋ถ๋ฆฌํด์ ๊ตฌํํ๋ ๊ฒ ๋ณด๋ค ํ๋ฒ์ ๋ฐ์ดํฐ๋ฅผ ์๋ฐ์ดํธ ์ํค๋ ๊ฒ์ด ์ข๋ค๊ณ  ํ๋จํ์์ต๋๋ค.  

<br/>

```javascript
@WebSocketGateway({ namespace: "project" })
export class SocketGateway {
	constructor(
		@InjectModel(Project.name) private project: Model<ProjectDocument>
	) {}

	@SubscribeMessage("update")
	handleMessage(@MessageBody() data) {
		return this.project
			.findOneAndUpdate({ projectId: data.projectId }, data, {
				returnOriginal: false
			})
			.exec();
	}

	handleDisconnect(client: Socket) {
		console.log(`Client disconnected: ${client.id}`);
	}

	handleConnection(client: Socket) {
		console.log(`Client Connected: ${client.id}`);
	}
}
```

<br/>
<br/>

Postman์ผ๋ก๋ ๋ค์๊ณผ ๊ฐ์ด ์์ผ ํต์  ํ์คํธ๋ฅผ ์งํํ  ์ ์์์ต๋๋ค.  

<br/>

<p align="center"><img src="https://user-images.githubusercontent.com/52685665/140968082-e8db02d9-52f5-4a4f-aeba-641251b06a2d.png"></p>

<br/>
<br/>


## ๐ Architecture

<p align="center"><img src="https://user-images.githubusercontent.com/52685665/140969833-e8c664a3-5166-48fe-bbee-c5d53fbf938d.png"></p>

<br/>

## ํด๋น ํ๋ก์ ํธ์์ ๊ฐ๊ณผํ ๋ถ๋ถ

์ ํฌ์ฒ๋ผ MongoDB ๋ฐ์ดํฐ๋ฅผ ๋ค๋ฃจ๋ฉด ์๋์ ์ฌ์ง์ฒ๋ผ Maximum Call Stack Error๊ฐ ๋ฐ์ํฉ๋๋ค. ์ฒ์ ๊ตฌํํ  ๋๋ ์๋ฌด๋ฌธ์  ์์ด ๋ณด์์ผ๋, ๊ฐ์ ์์ํ ๋ถ๋ถ์ ํฉ์น๊ณ  ๊ฐ์ข ๋ฐ์ดํฐ๋ค์ ๊ฐ์ ธ์ค๋ฉด์ MongoDB์์ ๋ฌธ์ ๊ฐ ๋ฐ์ํ๊ฒ ๋์์ต๋๋ค. ํด๋น ๋ฌธ์ ๋ฅผ ํ๋ก์ ํธ ์ ์ถ ์ง์ ์ ๋ฐ๊ฒฌํ์ฌ์ ์์ ์ ํ์ง ๋ชปํ์์ต๋๋ค. ํ์ง๋ง ํด๋น ๋ฌธ์ ๋ ๊ฐ์ ธ์ค๋ ๋ฐ์ดํฐ๋ผ๋ฆฌ ์๋ก ์ฐธ์กฐํ๊ธฐ ๋๋ฌธ์ ๋ฐ์ํ๋ ๊ฒ์ด์๊ณ , ์ด๋ mongoose Entity์ ๊ด๊ณ ์ค์  ๋ฌธ์ ์ด๊ธฐ ๋๋ฌธ์ Entity ์ค์ ์ ์์ ํ๊ณ  ๊ทธ์ ๋ง์ถฐ ์ฝ๋๋ฅผ ์์ ํ๋ฉด ํด๋น ์ค๋ฅ๋ ํด๊ฒฐํ  ์ ์์ ๊ฒ ๊ฐ์ต๋๋ค.

<p align="center"><img src="https://user-images.githubusercontent.com/52685665/140994654-a17bb159-2caf-401a-aad3-355decd165b4.png"></p>

<br/>

## ๐พ API 

[Postman ์ฃผ์-๋งํฌ](https://documenter.getpostman.com/view/15410333/UVC5F82o)

<br/>

## ๐พ API Test ๋ฐฉ๋ฒ

#### 1. ์์ Postman ์ฃผ์ ๋งํฌ๋ฅผ ํด๋ฆญํ์ฌ Postman์ผ๋ก ๋ค์ด๊ฐ๋๋ค.
#### 2. ์๋ฒ ์ฃผ์๊ฐ ์๋ง์์ง ํ์ธํฉ๋๋ค.

![image](https://user-images.githubusercontent.com/41619081/140978000-325a85ce-e0ae-4f26-9e6a-980e382b58f1.png)

#### 3. Signup, Login API๋ฅผ ์ด์ฉํ์ฌ ํ์๊ฐ์๊ณผ ๋ก๊ทธ์ธ์ ์งํํ  ์ ์์ต๋๋ค.

![image](https://user-images.githubusercontent.com/41619081/140990609-120571c6-ae78-4569-b921-c85b40bed2dc.png)

#### 4. Project Create, Read, Edit, Delete API๋ฅผ ์ด์ฉํ์ฌ ์ ์ ๋ ๊ฐ๊ฐ์ ๊ฒ์ ํ๋ก์ ํธ๋ฅผ ์์ฑ, ์์ธ๋ณด๊ธฐ, ํธ์ง, ์ญ์ ๊ฐ ๊ฐ๋ฅํฉ๋๋ค.

![image](https://user-images.githubusercontent.com/41619081/140990936-c8d6428e-01c4-44a6-90c3-fb374188edfa.png)
![image](https://user-images.githubusercontent.com/41619081/140987859-268e63b8-a99d-4af0-a101-34a3098a017c.png)

#### 5. Game API๋ฅผ ์ด์ฉํ์ฌ ํด๋น ๊ฒ์์ ๋ง๋  ์ ์ ๋ ํผ๋ธ๋ฆฌ์ฑ ํ  ์ ์๊ณ , ํผ๋ธ๋ฆฌ์ฑ ๋ ๊ฒ์ 1๊ฐ๋ฅผ ๋ณผ ์ ์์ต๋๋ค.

![image](https://user-images.githubusercontent.com/41619081/140991425-8102815d-672c-440e-ab8a-c27e3926a46d.png)

#### 6. Like, Hate API๋ฅผ ์ด์ฉํ์ฌ ๋ก๊ทธ์ธ ํ ์ ์ ๋ ํผ๋ธ๋ฆฌ์ฑ ๋ ๊ฒ์์ ์ข์์์ ์ซ์ด์๋ฅผ ๋๋ฅผ ์ ์์ต๋๋ค.


<br/>

## ๐ญ TIL ๋ธ๋ก๊ทธ ์ฃผ์

- ๊น๋ฐ๋ค : [ํฐ์คํ ๋ฆฌ ๋ธ๋ก๊ธฐ](https://bba-dda.tistory.com/112)
- ๊นํจ๋ฏผ : [ํฐ์คํ ๋ฆฌ ๋ธ๋ก๊ทธ](https://baejjang.tistory.com/6)
- ์๋๊ท  : [ํฐ์คํ ๋ฆฌ ๋ธ๋ก๊ทธ](https://tristy.tistory.com/45)
- ์ด๋์ :
- ์ฅํฌ์ง : [๊นํ๋ธ ๋ธ๋ก๊ทธ](https://heejin99.github.io/preonboarding/Pre-Onboarding-%EA%B8%B0%EC%97%85%EA%B3%BC%EC%A0%9C-%EB%A0%88%EB%93%9C%EB%B8%8C%EB%A6%AD-TIL/)
- ์กฐ์ฌ๋ณต : 
