import { Module } from "@nestjs/common";
import { mySQLOpenProjectPlanner } from "./open-project-planner.js";

@Module({
  providers: [mySQLOpenProjectPlanner],
  exports: [mySQLOpenProjectPlanner]
})
export class SourcesModule {}
