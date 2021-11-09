import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Project } from "src/entities/project.schema";

@Injectable()
export class ProjectRepository {
    constructor(@InjectModel("Project") private readonly projectModel: Model<Project>){}

    create(data): Promise<Project> {
        const project: Project = new Project();
        for (const [key, value] of Object.entries(data)) {
            project[key] = value;
        }

        return new this.projectModel(project).save();
    }

    async findById(_id: string): Promise<Project> {
        return await this.projectModel.findById({ _id });
    }

    updateOne(project, newData): Promise<Project> {
        for (const [key, value] of Object.entries(newData)) {
            project[key] = value;
        }

        return project.save();
    }

    delete(project) {
        return project.delete();
    }
}