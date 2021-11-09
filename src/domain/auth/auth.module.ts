import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { JwtModule } from "@nestjs/jwt";
import { MongooseModule } from "@nestjs/mongoose";
import { PassportModule } from "@nestjs/passport";
import { User, UserSchema } from "src/entities/user.schema";
import { JwtStrategy } from "./auth.jwtStrategy";
import { LocalStrategy } from "./auth.localStrategy";
import { AuthService } from "./auth.service";
@Module({
	imports: [
		ConfigModule.forRoot({
			envFilePath: [".env"],
			isGlobal: true
		}),
		PassportModule,
		MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
		JwtModule.register({
			secret: process.env.JWT_SECRET,
			signOptions: { expiresIn: "1D" }
		})
	],
	providers: [AuthService, LocalStrategy, JwtStrategy],
	exports: [AuthService]
})
export class AuthModule {}
