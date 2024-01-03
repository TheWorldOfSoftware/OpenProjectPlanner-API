import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  ParseUUIDPipe,
  Post,
  Put
} from "@nestjs/common";
import { BodyParam } from "../decorators/body-param.decorator.js";
import type Organisation from "../../models/organisation/organisation.js";
import OrganisationFeature from "../../features/organisation/organisation.feature.js";
import OrganisationPipe from "../pipes/organisations/organisation.pipe.js";
import type { UUID } from "crypto";

@Controller()
export default class OrganisationsController {
  private readonly organisationFeature: Readonly<OrganisationFeature>;

  public constructor(
    @Inject(OrganisationFeature)
    organisationFeature: Readonly<OrganisationFeature>
  ) {
    this.organisationFeature = organisationFeature;
  }

  @Get()
  public async getOrganisations(): Promise<Organisation[]> {
    return this.organisationFeature.getOrganisations();
  }

  @Post()
  public async postOrganisation(
    @Body(new OrganisationPipe(true)) body: Readonly<Organisation>
  ): Promise<void> {
    await this.organisationFeature.newOrganisation(body);
  }

  @Delete(":id")
  public async deleteOrganisation(
    @Param("id", new ParseUUIDPipe()) organisationId: UUID
  ): Promise<void> {
    await this.organisationFeature.removeOrganisation(organisationId);
  }

  @Put(":id")
  public async putOrganisation(
    @BodyParam("id", new OrganisationPipe()) body: Readonly<Organisation>
  ): Promise<void> {
    await this.organisationFeature.updateOrganisation(body);
  }
}
