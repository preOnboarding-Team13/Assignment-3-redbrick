export class ErrorCode {
	static readonly UnAuth = new ErrorCode(401, "인증되지 않은 사용자입니다.");
	static readonly BadRequest = new ErrorCode(400, "잘못된 접근입니다.");
	static readonly NotFound = new ErrorCode(
		404,
		"요청받은 리소스를 찾을 수 없습니다."
	);
	static readonly NotFoundGame = new ErrorCode(
		404,
		"해당 게임을 찾을 수 없습니다."
	);
	static readonly NotFoundUser = new ErrorCode(
		404,
		"해당 사용자를 찾을 수 없습니다."
	);
	static readonly NotFoundProject = new ErrorCode(
		404,
		"해당 프로젝트를 찾을 수 없습니다."
	);
	static readonly UnauthorizedUser = new ErrorCode(
		404,
		"아이디나 비밀번호를 확인해주세요."
	);
	static readonly DuplicatedUser = new ErrorCode(404, "중복된 아이디입니다.");
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
