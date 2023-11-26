import { Controller, Get, Inject } from "@nestjs/common";
import OrganisationFeature from "../../features/organisation/organisation.feature.js";
import type Organisation from "../../models/organisation/organisation.js";

@Controller()
export default class OrganisationsController {
  public constructor(@Inject(OrganisationFeature) private readonly organisationFeature: OrganisationFeature) {}

  @Get()
  public async getOrganisations(): Promise<Organisation[]> {
    return await this.organisationFeature.getOrganisations();
  }
}