import { Inject, Injectable } from "@nestjs/common";
import OrganisationRepository from "../../repositories/organisation/organisation.repository.js";
import type Organisation from "../../models/organisation/organisation.js";
import type { UUID } from "crypto";

@Injectable()
export default class OrganisationFeature {
  public constructor(
    @Inject(OrganisationRepository)
    private readonly organisationRepository: OrganisationRepository
  ) {}

  public async removeOrganisation(organisationId: UUID): Promise<void> {
    await this.organisationRepository.softDeleteOrganisation(organisationId);
  }

  public async getOrganisations(): Promise<Organisation[]> {
    return await this.organisationRepository.getOrganisations();
  }

  public async newOrganisation(organisation: Organisation): Promise<void> {
    await this.organisationRepository.insertOrganisation(organisation);
  }

  public async updateOrganisation(organisation: Organisation): Promise<void> {
    await this.organisationRepository.updateOrganisation(organisation);
  }
}
