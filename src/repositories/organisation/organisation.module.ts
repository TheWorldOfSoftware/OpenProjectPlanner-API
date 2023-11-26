import { Module } from "@nestjs/common";
import OrganisationRepository from "./organisation.repository.js";
import { SourcesModule } from "../sources/sources.module.js";

@Module({
  imports: [SourcesModule],
  providers: [OrganisationRepository],
  exports: [OrganisationRepository]
})
export default class OrganisationRepositoryModule {}