import { Module } from "@nestjs/common";
import BoardRepository from "./board/board.repository.js";
import OrganisationRepository from "./organisation/organisation.repository.js";
import { DatabaseModule } from "./databases/database.module.js";

@Module({
  providers: [BoardRepository, OrganisationRepository],
  imports: [DatabaseModule],
  exports: [BoardRepository, OrganisationRepository]
})
export default class RepositoryModule {}
