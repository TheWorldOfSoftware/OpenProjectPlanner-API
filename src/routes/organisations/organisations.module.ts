import { Module } from "@nestjs/common";
import OrganisationFeatureModule from "features/organisation/organisation.module.js";
import OrganisationsController from "./organisations.controller.js";

@Module({
  imports: [OrganisationFeatureModule],
  controllers: [OrganisationsController]
})
export default class OrganisationsModule {}
