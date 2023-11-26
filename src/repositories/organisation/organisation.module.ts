import { Module } from "@nestjs/common";
import OrganisationRepository from "./organisation.repository.js";
import { DatabaseModule } from "../databases/database.module.js";

@Module({
  imports: [DatabaseModule],
  providers: [OrganisationRepository],
  exports: [OrganisationRepository]
})
export default class OrganisationRepositoryModule {}