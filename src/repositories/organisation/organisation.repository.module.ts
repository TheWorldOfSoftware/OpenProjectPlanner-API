import { Module } from "@nestjs/common";
import OrganisationRepository from "./organisation.repository.js";
import { DatabaseModule } from "../databases/database.module.js";

@Module({
  providers: [OrganisationRepository],
  imports: [DatabaseModule],
  exports: [OrganisationRepository]
})
export default class OrganisationRepositoryModule {}
