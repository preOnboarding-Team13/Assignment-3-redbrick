import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Game } from "src/entities/game.schema";

@Injectable()
export class GameRepository {
    constructor(@InjectModel("Game") private readonly gameModel: Model<Game>) {}
    async create(project) {
        return await new this.gameModel({ project });
    }
}