import { Module } from "@nestjs/common";
import { SourcesModule } from "../sources/sources.module.js";
import { TeamRepository } from "./team.repository.js";

@Module({
  imports: [SourcesModule],
  providers: [TeamRepository],

  exports: [TeamRepository]
})
export class TeamRepositoryModule {}
