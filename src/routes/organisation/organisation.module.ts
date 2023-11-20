import { Module } from "@nestjs/common";
import OrganisationController from "./organisation.controller.js";
import { DatabaseModule } from "../../repositories/databases/database.module.js";
import OrganisationRepository from "../../repositories/organisation/organisation.repository.js";
import OrganisationFeature from "../../features/organisation/organisation.feature.js";

@Module({
  controllers: [OrganisationController],
  providers: [OrganisationFeature, OrganisationRepository],
  imports: [DatabaseModule]
})
export default class OrganisationModule {}
