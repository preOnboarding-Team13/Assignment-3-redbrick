export class ErrorCode {
	static readonly UnAuth = new ErrorCode(401, "인증되지 않은 사용자입니다.");
	static readonly BadRequest = new ErrorCode(400, "잘못된 접근입니다.");
	static readonly NotFound = new ErrorCode(
		404,
		"요청받은 리소스를 찾을 수 없습니다."
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
