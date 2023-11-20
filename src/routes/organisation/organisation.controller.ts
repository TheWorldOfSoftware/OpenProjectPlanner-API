import { Controller, Get, Inject } from "@nestjs/common";
import type Organisation from "../../models/organisation/organisation.js";
import OrganisationRepository from "../../repositories/organisation/organisation.repository.js";

@Controller()
export default class OrganisationController {
  public constructor(
    @Inject(OrganisationRepository)
    private readonly organisationRepository: OrganisationRepository
  ) {}

  @Get()
  async getAllOrganisations(): Promise<Organisation[]> {
    return await this.organisationRepository.getOrganisations();
  }
}
