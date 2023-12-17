import { Module } from "@nestjs/common";
import { OrganisationsController } from "./organisations.controller.js";
import { OrganisationFeatureModule } from "../../features/organisation/organisation.module.js";

@Module({
  imports: [OrganisationFeatureModule],
  controllers: [OrganisationsController]
})
export class OrganisationsModule {}
