import { Controller, Get, Inject } from "@nestjs/common";
import OrganisationFeature from "../../features/organisation/organisation.feature.js";

@Controller()
export default class OrganisationsController {
  public constructor(@Inject(OrganisationFeature) private readonly organisationFeature: OrganisationFeature) {}

  @Get()
  public async getOrganisations() {
    await this.organisationFeature.getOrganisations();
  }
}