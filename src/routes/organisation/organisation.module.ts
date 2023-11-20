import { Module } from "@nestjs/common";
import OrganisationController from "./organisation.controller.js";
import OrganisationFeature from "../../features/organisation/organisation.feature.js";
import OrganisationRepositoryModule from "../../repositories/organisation/organisation.repository.module.js";

@Module({
  controllers: [OrganisationController],
  providers: [OrganisationFeature],
  imports: [OrganisationRepositoryModule]
})
export default class OrganisationModule {}
