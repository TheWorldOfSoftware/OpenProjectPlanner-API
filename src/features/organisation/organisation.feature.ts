import { Inject, Injectable } from "@nestjs/common";
import OrganisationRepository from "../../repositories/organisation/organisation.repository.js";
import type Organisation from "../../models/organisation/organisation.js";

@Injectable()
export default class OrganisationFeature {
  public constructor(
    @Inject(OrganisationRepository)
    private readonly organisationRepository: OrganisationRepository
  ) {}

  public async getOrganisations(): Promise<Organisation[]> {
    return await this.organisationRepository.getOrganisations();
  }
}
