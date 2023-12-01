import { Body, Controller, Get, Inject, Post, Put } from "@nestjs/common";
import OrganisationFeature from "../../features/organisation/organisation.feature.js";
import type Organisation from "../../models/organisation/organisation.js";
import { OrganisationPipe } from "../pipes/organisation.pipe.js";

@Controller()
export default class OrganisationsController {
  public constructor(
    @Inject(OrganisationFeature)
    private readonly organisationFeature: OrganisationFeature
  ) {}

  @Get()
  public async getOrganisations(): Promise<Organisation[]> {
    return await this.organisationFeature.getOrganisations();
  }

  @Post()
  public async createOrganisation(
    @Body(new OrganisationPipe(true)) body: Organisation
  ): Promise<void> {
    await this.organisationFeature.newOrganisation(body);
  }

  @Put()
  public async updateOrganisation(
    @Body(new OrganisationPipe(false)) body: Organisation
  ): Promise<void> {
    await this.organisationFeature.updateOrganisation(body);
  }
}
