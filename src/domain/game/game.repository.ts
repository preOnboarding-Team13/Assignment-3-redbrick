import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Game } from "src/entities/game.schema";
import { Project } from "src/entities/project.schema";

@Injectable()
export class GameRepository {
    constructor(
        @InjectModel("Game") private readonly gameModel: Model<Game>,
        @InjectModel("Project") private readonly projectModel: Model<Project>
    ) {}

    create(project) {
        const created = new this.gameModel(project);
        return created.save()
    }

    async findByUserId(userId) {
        console.log(userId);
        const result = await this.gameModel.find({
            "project.userId": "test123"
        });

        console.log(result);
        
        // const found = this.projectModel.find({userId});
        return result
    }
}

// project: {
//     userId: "",
//     projectId: "",
//     projectName: "",
//     scenes:[],
//     isPublished: true,
//     gameId: "",
//     updateDt: new Date(),
//     createDt: new Date(),
// }