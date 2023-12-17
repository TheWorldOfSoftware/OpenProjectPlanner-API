import { BoardTeamRepository } from "./team.repository.js";
import { Module } from "@nestjs/common";
import { SourcesModule } from "../sources/sources.module.js";

@Module({
  imports: [SourcesModule],
  providers: [BoardTeamRepository],

  exports: [BoardTeamRepository]
})
export class BoardTeamRepositoryModule {}
