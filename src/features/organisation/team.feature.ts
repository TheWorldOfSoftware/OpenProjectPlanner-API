import { Inject, Injectable } from "@nestjs/common";
import TeamRepository from "../../repositories/organisation/team.repository.js";
import type Team from "../../models/organisation/team.js";
import type { UUID } from "crypto";

@Injectable()
export default class TeamFeature {
  public constructor(
    @Inject(TeamRepository) private readonly teamRepository: TeamRepository
  ) {}

  public async getTeams(organisationId: UUID): Promise<Team[]> {
    return await this.teamRepository.getTeams(organisationId);
  }

  public async newTeam(team: Team): Promise<void> {
    await this.teamRepository.insertTeam(team);
  }
}
