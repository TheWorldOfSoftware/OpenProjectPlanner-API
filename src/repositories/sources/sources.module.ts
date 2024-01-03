import { Module } from "@nestjs/common";
import OpenProjectPlannerModule from "./open-project-planner/open-project-planner.module.js";

@Module({
  imports: [OpenProjectPlannerModule],
  exports: [OpenProjectPlannerModule]
})
export default class SourcesModule {}
