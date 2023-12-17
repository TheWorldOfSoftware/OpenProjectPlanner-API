import { Inject, Injectable } from "@nestjs/common";
import type { Team } from "../../models/organisation/team.js";
import { TeamRepository } from "../../repositories/organisation/team.repository.js";
import type { UUID } from "crypto";

@Injectable()
export class TeamFeature {
  private readonly teamRepository: TeamRepository;

  public constructor(@Inject(TeamRepository) teamRepository: TeamRepository) {
    this.teamRepository = teamRepository;
  }

  public async getTeams(organisationId: UUID): Promise<Team[]> {
    return this.teamRepository.getTeams(organisationId);
  }

  public async newTeam(team: Team): Promise<void> {
    await this.teamRepository.insertTeam(team);
  }
}
