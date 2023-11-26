import { Inject, Injectable } from "@nestjs/common";
import OrganisationRepository from "../../repositories/organisation/organisation.repository.js";

@Injectable()
export default class OrganisationFeature {
  public constructor(@Inject(OrganisationRepository) private readonly organisationRepository: OrganisationRepository) {}

  public async getOrganisations() {
    return await this.organisationRepository.getOrganisations();
  }
}