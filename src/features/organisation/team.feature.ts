import { Inject, Injectable } from "@nestjs/common";
import type Team from "../../models/organisation/team.js";
import TeamRepository from "../../repositories/organisation/team.repository.js";
import type { UUID } from "crypto";

@Injectable()
export default class TeamFeature {
  private readonly teamRepository: Readonly<TeamRepository>;

  public constructor(
    @Inject(TeamRepository) teamRepository: Readonly<TeamRepository>
  ) {
    this.teamRepository = teamRepository;
  }

  public async getTeams(organisationId: UUID): Promise<Team[]> {
    return this.teamRepository.getTeams(organisationId);
  }

  public async newTeam(team: Readonly<Team>): Promise<void> {
    await this.teamRepository.insertTeam(team);
  }
}
