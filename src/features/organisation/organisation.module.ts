import { Module } from "@nestjs/common";
import OrganisationFeature from "./organisation.feature.js";
import OrganisationRepositoryModule from "repositories/organisations/organisation.module.js";

@Module({
  imports: [OrganisationRepositoryModule],
  providers: [OrganisationFeature],

  exports: [OrganisationFeature]
})
export default class OrganisationFeatureModule {}
