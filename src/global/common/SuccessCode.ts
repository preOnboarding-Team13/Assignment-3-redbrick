export class SuccessCode {
	static readonly CreateUser = new SuccessCode(
		201,
		"회원가입에 성공했습니다."
	);
	static readonly LoginUser = new SuccessCode(200, "로그인이 성공했습니다.");
	static readonly CreateProject = new SuccessCode(
		201,
		"프로젝트를 생성했습니다."
	);
	static readonly DeleteProject = new SuccessCode(
		200,
		"프로젝트를 삭제했습니다."
	);

	constructor(
		private readonly statusCode: number,
		public readonly message: string
	) {}

	get StatusCode(): number {
		return this.statusCode;
	}

	get Message(): string {
		return this.message;
	}
}
