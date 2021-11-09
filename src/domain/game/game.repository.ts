import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Game, GameSchema } from "src/entities/game.schema";
import { Project } from "src/entities/project.schema";
import { SearchQuery } from "./dto/searchQuery.dto";

@Injectable()
export class GameRepository {
    constructor(
        @InjectModel("Game") private readonly gameModel: Model<Game>,
        @InjectModel("Project") private readonly projectModel: Model<Project>
    ) {}

    create(data) {
        return new this.gameModel(data).save();
    }

    async findByUserId(userId) {
        const result = await this.gameModel.find({
            "project.userId": userId,
        });
        return result
    }

    async findByGameName(gameName) {
        GameSchema.index({
            gameName: "text"
        });

        const result = await this.gameModel.find({
            gameName: new RegExp(gameName)
        });

        return result
    }

    async findByUserIdAndGameName(query: SearchQuery) {
        const result = await this.gameModel.find({
            gameName: new RegExp(query.gameName),
            "project.userId": query.userId,
        });
        return result
    }

}