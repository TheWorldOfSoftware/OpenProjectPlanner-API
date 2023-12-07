import { Module } from "@nestjs/common";
import { SourcesModule } from "../sources/sources.module.js";
import BoardTeamRepository from "./team.repository.js";

@Module({
  imports: [SourcesModule],
  providers: [BoardTeamRepository],
  exports: [BoardTeamRepository]
})
export default class BoardTeamRepositoryModule {}
