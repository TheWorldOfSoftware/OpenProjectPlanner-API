import { Module } from "@nestjs/common";
import OrganisationController from "./organisation.controller.js";
import OrganisationFeature from "../../features/organisation/organisation.feature.js";
import RepositoryModule from "../../repositories/repository.module.js";

@Module({
  controllers: [OrganisationController],
  providers: [OrganisationFeature],
  imports: [RepositoryModule]
})
export default class OrganisationModule {}
