import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User } from "src/entities/user.schema";

export class UserRepository {
    constructor(@InjectModel("User") private userModel: Model<User>){}

    async create(user) {
        return await new this.userModel(user).save();
    }

    async findOne(userId: string): Promise<User> {
        return await this.userModel.findOne({ userId })
    }
}