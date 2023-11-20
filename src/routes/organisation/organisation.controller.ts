import { Controller, Get, Inject } from "@nestjs/common";
import type Organisation from "../../models/organisation/organisation.js";
import OrganisationFeature from "../../features/organisation/organisation.feature.js";

@Controller()
export default class OrganisationController {
  public constructor(
    @Inject(OrganisationFeature)
    private readonly organisationFeatuOrganisationFeature: OrganisationFeature
  ) {}

  @Get()
  async getAllOrganisations(): Promise<Organisation[]> {
    return await this.organisationFeatuOrganisationFeature.getOrganisations();
  }
}
