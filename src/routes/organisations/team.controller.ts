import {
  Controller,
  Get,
  Inject,
  Param,
  ParseUUIDPipe,
  Post
} from "@nestjs/common";
import TeamFeature from "../../features/organisation/team.feature.js";
import type Team from "../../models/organisation/team.js";
import type { UUID } from "crypto";
import { TeamPipe } from "../pipes/organisations/team.pipe.js";
import { BodyParam } from "../decorators/body-param.decorator.js";

@Controller()
export default class TeamController {
  public constructor(
    @Inject(TeamFeature) private readonly teamFeature: TeamFeature
  ) {}

  @Get()
  public async getTeams(
    @Param("organisationId", new ParseUUIDPipe()) organisationId: UUID
  ): Promise<Team[]> {
    return await this.teamFeature.getTeams(organisationId);
  }

  @Post()
  public async createTeam(
    @BodyParam("organisationId", new TeamPipe(true)) team: Team
  ): Promise<void> {
    await this.teamFeature.newTeam(team);
  }
}
