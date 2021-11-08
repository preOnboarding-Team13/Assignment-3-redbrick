export class SuccessCode {
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

	getStatusCode(): number {
		return this.statusCode;
	}

	getMessage(): string {
		return this.message;
	}
}
