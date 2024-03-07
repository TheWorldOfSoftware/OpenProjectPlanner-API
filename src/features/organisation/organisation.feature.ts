import { Inject, Injectable } from "@nestjs/common";
import type Organisation from "models/organisation/organisation.js";
import OrganisationRepository from "repositories/organisations/organisation.repository.js";
import type { UUID } from "crypto";

@Injectable()
export default class OrganisationFeature {
  private readonly organisationRepository: Readonly<OrganisationRepository>;

  public constructor(
    @Inject(OrganisationRepository)
    organisationRepository: Readonly<OrganisationRepository>
  ) {
    this.organisationRepository = organisationRepository;
  }

  public async removeOrganisation(organisationId: UUID): Promise<void> {
    await this.organisationRepository.softDeleteOrganisation(organisationId);
  }

  public async getOrganisations(): Promise<Organisation[]> {
    return this.organisationRepository.getOrganisations();
  }

  public async newOrganisation(
    organisation: Readonly<Organisation>
  ): Promise<void> {
    await this.organisationRepository.insertOrganisation(organisation);
  }

  public async updateOrganisation(
    organisation: Readonly<Organisation>
  ): Promise<void> {
    await this.organisationRepository.updateOrganisation(organisation);
  }
}
