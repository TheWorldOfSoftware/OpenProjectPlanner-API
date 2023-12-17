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
import type { Organisation } from "../../models/organisation/organisation.js";
import { OrganisationFeature } from "../../features/organisation/organisation.feature.js";
import { OrganisationPipe } from "../pipes/organisations/organisation.pipe.js";
import type { UUID } from "crypto";

@Controller()
export class OrganisationsController {
  public constructor(
    @Inject(OrganisationFeature)
    private readonly organisationFeature: OrganisationFeature
  ) {}

  @Delete(":id")
  public async deleteOrganisation(
    @Param("id", new ParseUUIDPipe()) organisationId: UUID
  ): Promise<void> {
    await this.organisationFeature.removeOrganisation(organisationId);
  }

  @Get()
  public async getOrganisations(): Promise<Organisation[]> {
    return this.organisationFeature.getOrganisations();
  }

  @Post()
  public async postOrganisation(
    @Body(new OrganisationPipe()) body: Organisation
  ): Promise<void> {
    await this.organisationFeature.newOrganisation(body);
  }

  @Put(":id")
  public async putOrganisation(
    @BodyParam("id", new OrganisationPipe()) body: Organisation
  ): Promise<void> {
    await this.organisationFeature.updateOrganisation(body);
  }
}
