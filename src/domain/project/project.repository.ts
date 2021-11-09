import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Project } from "src/entities/project.schema";

@Injectable()
export class ProjectRepository {
    constructor(@InjectModel("Project") private readonly projectModel: Model<Project>){}

    findById(id: string) {
        return this.projectModel.findById(id);
    }

}